/* Botón flotante y menú de consultas rápidas del colegio. */
(() => {
  if (document.querySelector(".whatsapp-float")) return;

  const phone = "573132559038";
  const defaultMessage = "Hola, quisiera recibir información del Colegio Santa María de la Esperanza.";
  const buildWhatsAppUrl = (message) =>
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  const panel = document.createElement("section");
  panel.className = "whatsapp-contact-panel";
  panel.id = "whatsapp-contact-panel";
  panel.hidden = true;
  panel.setAttribute("aria-label", "Consultas rápidas por WhatsApp");
  panel.innerHTML = `
    <div class="whatsapp-contact-header">
      <div>
        <p class="whatsapp-contact-heading">¿Cómo podemos ayudarte?</p>
        <p class="whatsapp-contact-subtitle">Elige un tema y continuaremos la conversación por WhatsApp.</p>
      </div>
      <button class="whatsapp-contact-close" type="button" aria-label="Cerrar consultas rápidas">&times;</button>
    </div>
    <div class="whatsapp-contact-options">
      <button class="whatsapp-contact-option" type="button" data-message="Hola, quisiera información sobre admisiones y matrículas del Colegio Santa María de la Esperanza."><span>Admisiones y matrículas</span><span aria-hidden="true">›</span></button>
      <button class="whatsapp-contact-option" type="button" data-message="Hola, quisiera información sobre la oferta académica del Colegio Santa María de la Esperanza."><span>Oferta académica</span><span aria-hidden="true">›</span></button>
      <button class="whatsapp-contact-option" type="button" data-message="Hola, quisiera información general sobre el Colegio Santa María de la Esperanza."><span>Información general</span><span aria-hidden="true">›</span></button>
      <button class="whatsapp-contact-option" type="button" data-message="Hola, quisiera comunicarme con el Colegio Santa María de la Esperanza para resolver una consulta."><span>Hablar con el colegio</span><span aria-hidden="true">›</span></button>
    </div>
    <a class="whatsapp-contact-faq" href="admisiones.html#preguntas-frecuentes">Consultar preguntas frecuentes</a>
  `;

  const link = document.createElement("a");
  link.className = "whatsapp-float";
  link.href = buildWhatsAppUrl(defaultMessage);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Abrir consultas rápidas de WhatsApp");
  link.setAttribute("title", "Consultas por WhatsApp");
  link.setAttribute("aria-controls", panel.id);
  link.setAttribute("aria-expanded", "false");
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.8 1.48h.01C18.66 23.84 24 18.5 24 11.92c0-3.18-1.24-6.17-3.48-8.44ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.43-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z"/></svg>';

  document.body.appendChild(panel);
  document.body.appendChild(link);

  const closePanel = () => {
    panel.hidden = true;
    link.setAttribute("aria-expanded", "false");
  };
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const opening = panel.hidden;
    panel.hidden = !opening;
    link.setAttribute("aria-expanded", String(opening));
    if (opening) panel.querySelector(".whatsapp-contact-close").focus();
  });
  panel.querySelector(".whatsapp-contact-close").addEventListener("click", () => {
    closePanel();
    link.focus();
  });
  panel.querySelectorAll("[data-message]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = button.getAttribute("data-message") || defaultMessage;
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
      link.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !link.contains(event.target)) closePanel();
  });
})();
