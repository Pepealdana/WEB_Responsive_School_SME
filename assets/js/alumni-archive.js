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
    2024:"assets/img/promociones_sme/2024.webp",2025:"assets/img/promociones_sme/2025.webp",
    2026:"assets/img/promociones_sme/2026.webp"
  };

  const titleByYear = {
    2007:"Grossten",2011:"Förderung",2012:"Veljeys",2013:"Seniors",
    2015:"Laureati",2016:"Britannien",2017:"Lief",2018:"Prom SME",2019:"Vincers",
    2020:"Vestigium",2021:"Fratelli",2022:"Lithium",2023:"Laarsen",
    2024:"Olympus",2025:"Legathium",2026:"Fortum"
  };

  const promotions = Array.from({length:37}, (_, i) => {
    const year = 2027 - i;
    const cover = photoByYear[year] || fallbackPhoto;
    return {
      year, title:titleByYear[year] || "Prom SME", cover,
      hasPhoto:Boolean(photoByYear[year]),
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

  // Selecciona el año actual si tiene foto; de lo contrario, la promoción
  // más reciente anterior que sí tenga una fotografía real.
  const currentYear = new Date().getFullYear();
  const initialIndex = Math.max(0, promotions.findIndex(item => item.year ===
    [...promotions].filter(p => p.year <= currentYear && p.hasPhoto)
      .sort((a,b) => b.year-a.year)[0]?.year));
  let activeIndex = initialIndex;
  let previousFocus = null;
  const total = promotions.length;
  const titleOf = item => item.title || "Prom SME";

  function renderRail() {
    rail.innerHTML = promotions.map((item,index) =>
      '<button type="button" class="alumni-generation-item" data-select-generation="' + index +
      '" aria-pressed="false" aria-label="Promoción ' + item.year + ', ' + escapeHTML(titleOf(item)) + '">' +
      '<span class="alumni-rail-node"><img class="alumni-rail-crest" src="' + item.crest +
      '" alt="" loading="lazy" decoding="async" width="26" height="26"></span>' +
      '<span class="alumni-rail-year">' + item.year + '</span>' +
      '<span class="alumni-rail-title">' + escapeHTML(titleOf(item)) + '</span></button>'
    ).join("");
  }

  function updateRailSelection(scroll = false) {
    const buttons = [...rail.querySelectorAll("[data-select-generation]")];
    buttons.forEach(button => {
      const selected = Number(button.dataset.selectGeneration) === activeIndex;
      button.setAttribute("aria-pressed", String(selected));
      button.classList.toggle("is-selected", selected);
    });
    if (scroll) {
      const selected = buttons[activeIndex];
      if (selected) {
        const railRect = rail.getBoundingClientRect();
        const itemRect = selected.getBoundingClientRect();
        const left = rail.scrollLeft + itemRect.left - railRect.left -
          (rail.clientWidth - selected.offsetWidth) / 2;
        rail.scrollTo({
          left:Math.max(0, Math.min(rail.scrollWidth - rail.clientWidth, left)),
          behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      }
    }
  }

  function renderStage() {
    const item = promotions[activeIndex];
    stage.innerHTML =
      '<div class="alumni-feature-photo-wrap">' +
        '<button type="button" class="alumni-feature-photo" data-enlarge-photo aria-label="Ampliar fotografía de la promoción ' + item.year + '">' +
          '<img src="' + item.cover + '" alt="' + (item.hasPhoto ? "Fotografía de la promoción " : "Imagen provisional del colegio para la promoción ") + item.year +
          '" decoding="async" fetchpriority="high" width="1200" height="800">' +
          '<span class="alumni-photo-enlarge"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i><span>Ampliar</span></span>' +
        '</button>' +
        '<button type="button" class="alumni-stage-arrow alumni-stage-prev" data-step="-1" aria-label="Promoción anterior"><i class="bi bi-chevron-left"></i></button>' +
        '<button type="button" class="alumni-stage-arrow alumni-stage-next" data-step="1" aria-label="Promoción siguiente"><i class="bi bi-chevron-right"></i></button>' +
      '</div>';
    if (caption) {
      caption.innerHTML =
        '<div class="alumni-feature-title alumni-feature-title-inline">' +
          '<p class="alumni-promotion-line">' +
            '<span class="alumni-feature-kicker">Promoción:</span>' +
            '<strong class="alumni-promotion-name">' + escapeHTML(titleOf(item)) + '</strong>' +
            '<span class="alumni-promotion-year">' + item.year + '</span>' +
          '</p>' +
          (item.hasPhoto ? "" : '<span class="alumni-provisional-label">Fotografía del campus</span>') +
        '</div>';
    }
    updateRailSelection();
  }

  function selectGeneration(index, shouldScroll = true) {
    activeIndex = Math.max(0, Math.min(total - 1, index));
    renderStage();
    updateRailSelection(shouldScroll);
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
    if (button) selectGeneration(Number(button.dataset.selectGeneration));
  });

  root.querySelectorAll("[data-rail-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      selectGeneration(activeIndex + (button.dataset.railScroll === "left" ? -1 : 1));
    });
  });

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
  requestAnimationFrame(() => updateRailSelection(true));
})();