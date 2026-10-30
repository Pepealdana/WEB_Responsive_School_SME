(() => {
  const root = document.querySelector("[data-alumni-archive]");
  if (!root) return;

  const fallbackPhoto = "assets/img/campus/campus-03-plazoleta.webp";
  const historicCrest = "assets/img/simbolos/escudo_sme.webp";
  const currentCrest = "assets/img/new_logo/new_logo_colsme_mini.webp";
  const photoByYear = {
    1991:"assets/img/promociones_sme/1991.webp",1994:"assets/img/promociones_sme/1994.webp",
    1995:"assets/img/promociones_sme/1995.webp",1996:"assets/img/promociones_sme/1996.webp",
    1999:"assets/img/promociones_sme/1999.webp",2000:"assets/img/promociones_sme/2000.webp",
    2002:"assets/img/promociones_sme/2002.webp",2006:"assets/img/promociones_sme/2006.webp",
    2007:"assets/img/promociones_sme/2007.webp",2008:"assets/img/promociones_sme/2008.webp",
    2009:"assets/img/promociones_sme/2009.webp",2011:"assets/img/promociones_sme/2011.webp",
    2012:"assets/img/promociones_sme/2012.webp",2013:"assets/img/promociones_sme/2013.webp",
    2015:"assets/img/promociones_sme/2015.webp",2017:"assets/img/promociones_sme/2017.webp",
    2018:"assets/img/promociones_sme/2018.webp",2019:"assets/img/promociones_sme/2019.webp",
    2020:"assets/img/promociones_sme/2020.webp",2021:"assets/img/promociones_sme/2021.webp",
    2022:"assets/img/promociones_sme/2022.webp",2023:"assets/img/promociones_sme/2023.webp",
    2024:"assets/img/promociones_sme/2024.webp",2025:"assets/img/promociones_sme/2025.webp"
  };

  const promotions = Array.from({length:37}, (_, i) => {
    const year = 2027 - i;
    const hasPhoto = Boolean(photoByYear[year]);
    return {
      year, title:"Luz y Esperanza",
      cover:photoByYear[year] || fallbackPhoto,
      hasPhoto,
      crest:year >= 2027 ? currentCrest : historicCrest
    };
  });

  const stage = root.querySelector("[data-alumni-stage]");
  const caption = root.querySelector("[data-alumni-caption]");
  const rail = root.querySelector("[data-alumni-rail]");
  const timeline = root.querySelector("[data-alumni-timeline]");
  const empty = root.querySelector("[data-alumni-empty]");
  const help = root.querySelector("[data-alumni-help]");
  if (!stage || !rail || !timeline) return;

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));

  const currentYear = new Date().getFullYear();
  const currentYearIndex = promotions.findIndex(item => item.year === currentYear);
  const initialYear = currentYearIndex >= 0 && promotions[currentYearIndex].hasPhoto
    ? currentYear
    : currentYear - 1;
  const initialIndex = Math.max(0, promotions.findIndex(item => item.year === initialYear));
  let activeIndex = initialIndex;
  let previousFocus = null;
  let scrollFrame = 0;
  let scrollSettle = 0;
  let internalScroll = false;
  const total = promotions.length;
  const titleOf = item => item.title || "Luz y Esperanza";

  function renderRailCopy(copy) {
    return promotions.map((item, index) =>
      '<button type="button" class="alumni-generation-item" data-select-generation="' + index +
      '" data-rail-copy="' + copy + '" aria-pressed="false" aria-label="Promoción ' + item.year +
      ', ' + escapeHTML(titleOf(item)) + '">' +
      '<span class="alumni-rail-node"><img class="alumni-rail-crest" src="' + item.crest +
      '" alt="" loading="lazy" decoding="async" width="26" height="26"></span>' +
      '<span class="alumni-rail-year">' + item.year + '</span>' +
      '<span class="alumni-rail-title">' + escapeHTML(titleOf(item)) + '</span></button>'
    ).join("");
  }

  function renderRail() {
    rail.innerHTML = [0,1,2].map(renderRailCopy).join("");
  }

  function updateRailSelection() {
    rail.querySelectorAll("[data-select-generation]").forEach(button => {
      const selected = Number(button.dataset.railCopy) === 1 &&
        Number(button.dataset.selectGeneration) === activeIndex;
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function renderStage() {
    const item = promotions[activeIndex];
    stage.innerHTML =
      '<div class="alumni-feature-photo-wrap">' +
        '<button type="button" class="alumni-feature-photo" data-enlarge-photo aria-label="Ampliar fotografía de la promoción ' + item.year + '">' +
          '<img src="' + item.cover + '" alt="' + (item.hasPhoto ? "Fotografía de la promoción " : "Imagen provisional del colegio para la promoción ") + item.year +
          '" decoding="async" fetchpriority="' + (activeIndex === 0 ? "high" : "auto") + '">' +
          '<span class="alumni-photo-enlarge"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i><span>Ampliar</span></span>' +
        '</button>' +
        '<button type="button" class="alumni-stage-arrow alumni-stage-prev" data-step="-1" aria-label="Promoción anterior"><i class="bi bi-chevron-left"></i></button>' +
        '<button type="button" class="alumni-stage-arrow alumni-stage-next" data-step="1" aria-label="Promoción siguiente"><i class="bi bi-chevron-right"></i></button>' +
      '</div>';
    if (caption) {
      caption.innerHTML =
        '<div class="alumni-feature-title"><span class="alumni-feature-kicker">PROMOCIÓN SME</span>' +
        '<h3>' + escapeHTML(titleOf(item)) + '</h3><p><i class="bi bi-calendar3" aria-hidden="true"></i> ' + item.year +
        (item.hasPhoto ? "" : ' <span class="alumni-provisional-label">· Fotografía del campus</span>') + '</p></div>' +
        '<span class="alumni-photo-count">' + String(activeIndex + 1).padStart(2,"0") + ' / ' + total + '</span>';
    }
    updateRailSelection();
  }

  function scrollToItem(index, copy = 1, behavior = "smooth") {
    const button = rail.querySelector('[data-rail-copy="' + copy + '"][data-select-generation="' + index + '"]');
    if (!button) return;
    internalScroll = true;
    const left = button.offsetLeft - (rail.clientWidth - button.offsetWidth) / 2;
    rail.scrollTo({left, behavior});
    window.setTimeout(() => { internalScroll = false; }, behavior === "auto" ? 40 : 500);
  }

  function selectGeneration(index, copy = 1, center = true) {
    activeIndex = (index + total) % total;
    renderStage();
    if (center) scrollToItem(activeIndex, copy);
  }

  const modal = document.createElement("div");
  modal.className = "alumni-photo-lightbox";
  modal.hidden = true;
  modal.setAttribute("role","dialog");
  modal.setAttribute("aria-modal","true");
  modal.setAttribute("aria-label","Fotografía ampliada de promoción");
  modal.innerHTML =
    '<button type="button" class="alumni-lightbox-close" data-lightbox-close aria-label="Cerrar fotografía"><i class="bi bi-x-lg"></i></button>' +
    '<button type="button" class="alumni-lightbox-arrow alumni-lightbox-prev" data-lightbox-step="-1" aria-label="Promoción anterior"><i class="bi bi-chevron-left"></i></button>' +
    '<div class="alumni-lightbox-content"><img alt=""><p></p></div>' +
    '<button type="button" class="alumni-lightbox-arrow alumni-lightbox-next" data-lightbox-step="1" aria-label="Promoción siguiente"><i class="bi bi-chevron-right"></i></button>';
  document.body.appendChild(modal);

  function renderLightbox() {
    const item = promotions[activeIndex];
    const image = modal.querySelector("img");
    image.src = item.cover;
    image.alt = "Promoción " + item.year + " — " + titleOf(item);
    modal.querySelector("p").textContent = titleOf(item) + " · " + item.year +
      (item.hasPhoto ? "" : " · Imagen provisional del colegio");
  }
  function openLightbox() {
    previousFocus = document.activeElement;
    renderLightbox();
    modal.hidden = false;
    document.body.classList.add("alumni-lightbox-open");
    modal.querySelector(".alumni-lightbox-close").focus();
  }
  function closeLightbox() {
    modal.hidden = true;
    document.body.classList.remove("alumni-lightbox-open");
    if (previousFocus) previousFocus.focus();
  }

  stage.addEventListener("click", event => {
    if (event.target.closest("[data-enlarge-photo]")) { openLightbox(); return; }
    const arrow = event.target.closest("[data-step]");
    if (arrow) selectGeneration(activeIndex + Number(arrow.dataset.step));
  });
  rail.addEventListener("click", event => {
    const button = event.target.closest("[data-select-generation]");
    if (button) selectGeneration(Number(button.dataset.selectGeneration), Number(button.dataset.railCopy));
  });

  root.querySelectorAll("[data-rail-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      selectGeneration(activeIndex + (button.dataset.railScroll === "left" ? -1 : 1));
    });
  });

  function normalizeInfiniteRail() {
    const third = rail.scrollWidth / 3;
    if (!third) return;
    if (rail.scrollLeft < third * .45) {
      rail.scrollLeft += third;
    } else if (rail.scrollLeft > third * 1.55) {
      rail.scrollLeft -= third;
    }
  }

  rail.addEventListener("scroll", () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      normalizeInfiniteRail();
      if (internalScroll) return;
      window.clearTimeout(scrollSettle);
      scrollSettle = window.setTimeout(() => {
        const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
        const buttons = [...rail.querySelectorAll('[data-rail-copy="1"]')];
        let nearest = null, distance = Infinity;
        buttons.forEach(button => {
          const rect = button.getBoundingClientRect();
          const current = Math.abs(rect.left + rect.width / 2 - center);
          if (current < distance) { distance = current; nearest = button; }
        });
        if (nearest) {
          const nextIndex = Number(nearest.dataset.selectGeneration);
          if (nextIndex !== activeIndex) {
            activeIndex = nextIndex;
            renderStage();
          }
        }
      }, 90);
    });
  }, {passive:true});

  modal.addEventListener("click", event => {
    if (event.target.closest("[data-lightbox-close]")) { closeLightbox(); return; }
    const arrow = event.target.closest("[data-lightbox-step]");
    if (arrow) { selectGeneration(activeIndex + Number(arrow.dataset.lightboxStep)); renderLightbox(); }
  });
  document.addEventListener("keydown", event => {
    if (modal.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") { selectGeneration(activeIndex - 1); renderLightbox(); }
    if (event.key === "ArrowRight") { selectGeneration(activeIndex + 1); renderLightbox(); }
  });
  rail.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      selectGeneration(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  timeline.hidden = false;
  if (empty) empty.hidden = true;
  if (help) help.hidden = false;
  renderRail();
  renderStage();
  requestAnimationFrame(() => scrollToItem(initialIndex, 1, "auto"));
})();