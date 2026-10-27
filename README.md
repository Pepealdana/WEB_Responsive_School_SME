# Colegio Santa María de la Esperanza — Sitio web institucional

Sitio web estático del Colegio Santa María de la Esperanza (COLSME), Facatativá, Cundinamarca, Colombia.

- **Producción:** https://colsme.edu.co/
- **Repositorio:** https://github.com/Pepealdana/WEB_Responsive_School_SME
- **Tecnologías:** HTML5, CSS3, JavaScript, Bootstrap 5, Bootstrap Icons, AOS, Swiper y GLightbox.
- **Despliegue:** alojamiento estático/Apache; no requiere Node.js ni compilación.

## Estructura

- Páginas HTML en la raíz: inicio, información institucional, comunidad PIJ, admisiones, contacto y páginas temáticas.
- `assets/css/main.css`: estilos compartidos y componentes institucionales.
- `assets/js/main.js`: navegación e interacciones comunes.
- `assets/js/campus-gallery.js`: visor de fotografías del campus.
- `assets/vendor/`: bibliotecas de terceros distribuidas localmente.
- `manifest.json` y `service-worker.js`: manifiesto web y estrategia de caché.
- `.htaccess`: página 404, cabeceras HTTP y políticas de caché para Apache.
- `.github/workflows/codeql.yml` y `.github/dependabot.yml`: análisis estático y mantenimiento preventivo.

## Desarrollo local

1. Clona el repositorio y abre la carpeta en VS Code.
2. Usa Live Server o un servidor HTTP local. No abras los archivos mediante `file://`.
3. Prueba en `http://127.0.0.1:5500/` o el puerto que indique Live Server.
4. Para inspeccionar la caché, abre DevTools > Application > Service Workers y Cache Storage.

## Caché y funcionamiento sin conexión

El service worker usa una caché versionada. Las navegaciones intentan primero la red para priorizar el contenido actualizado y recurren a una copia guardada cuando no hay conexión. Los recursos estáticos del mismo origen se reutilizan desde caché y se descargan si no están almacenados. No se almacenan solicitudes que no sean GET, recursos externos ni archivos de audio/vídeo.

Al modificar la lista de recursos esenciales o la estrategia, incrementa `CACHE_VERSION` en `service-worker.js`. Comprueba primera visita online, recarga tras desplegar, navegación offline a páginas visitadas y formularios online. Los formularios que dependen de servicios remotos no funcionan sin conexión.

## Rendimiento

- Mantén dimensiones explícitas en imágenes y utiliza WebP/AVIF cuando sea apropiado.
- Usa carga diferida para imágenes fuera de la primera pantalla; no la uses para el elemento principal visible (LCP/hero).
- No cargues bibliotecas en páginas que no las necesitan.
- Conserva versiones minificadas de dependencias para producción.
- Antes de retirar CSS repetido, comprueba cascada, especificidad y resultado en escritorio y móvil; una regla aparentemente duplicada puede modificar el diseño.

## Seguridad y privacidad

- No guardes credenciales, tokens ni información privada de estudiantes, familias o funcionarios en el repositorio.
- Los formularios dependen de servicios externos. Verifica destino, validación y políticas de privacidad antes de modificar su configuración.
- Las cabeceras de `.htaccess` solo se aplican si Apache permite `mod_headers`. HSTS debe mantenerse únicamente si el dominio y los subdominios incluidos operan permanentemente por HTTPS.
- La web estática no puede proteger secretos incluidos en JavaScript del cliente. El service worker y las cabeceras no sustituyen controles del servidor ni una auditoría de proveedores externos.

## Despliegue

Publica los archivos en la raíz del sitio (por ejemplo, `public_html`) conservando la estructura de carpetas. Verifica HTTPS, página 404, formularios, imágenes, navegación móvil y registro del service worker después del despliegue.

## Documentación

- [Política de seguridad](SECURITY.md)
- [Términos y privacidad](terminos.html)

## Autoría y licencia

Desarrollado y mantenido por Peters Aldana Gómez. Proyecto de uso educativo e institucional. Todos los derechos reservados © Colegio Santa María de la Esperanza.
