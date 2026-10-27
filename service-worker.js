/* COLSME service worker. Increment CACHE_VERSION when changing cache policy. */
'use strict';

const CACHE_PREFIX = 'colsme-site-';
const CACHE_VERSION = 'v1-20261027';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;
const CORE_ASSETS = [
  './',
  './index.html',
  './404.html',
  './manifest.json',
  './assets/css/main.css',
  './assets/vendor/bootstrap/css/bootstrap.min.css',
  './assets/vendor/bootstrap-icons/bootstrap-icons.css',
  './assets/js/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache large media files.
  if (request.destination === 'video' || request.destination === 'audio') return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || caches.match('./404.html'))
    );
    return;
  }

  // Cache-first for local static assets; populate cache after successful network response.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
