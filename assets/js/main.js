/**
* Template Name: NiceSchool
* Template URL: https://bootstrapmade.com/nice-school-bootstrap-education-template/
* Updated: May 10 2025 with Bootstrap v5.3.6
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * obra social slider peregrinación y semillas
   */
  new Swiper('.swiper-card', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

})();

 /**
   * galeria slider procasita
   */

document.addEventListener("DOMContentLoaded", function () {

  const data = [

    {
      grande: "assets/img/obrasocial/procasita/amosme.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2025_1.webp",
      texto1: "#SomosSME",
      texto2: "2025"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2025_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2025_3.webp",
      texto1: "2025",
      texto2: "2025"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2025_4.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2024_1.webp",
      texto1: "2025",
      texto2: "2024"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2023_5.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2023_4.webp",
      texto1: "2023",
      texto2: "2023"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2023_3.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2023_2.webp",
      texto1: "2023",
      texto2: "2023"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2023_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2022_1.webp",
      texto1: "2023",
      texto2: "2022"
    },

   {
      grande: "assets/img/obrasocial/procasita/procasita_2021_6.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2021_5.webp",
      texto1: "2021",
      texto2: "2021"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2021_4.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2021_3.webp",
      texto1: "2021",
      texto2: "2021"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2021_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2021_1.webp",
      texto1: "2021",
      texto2: "2021"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2020_4.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2020_3.webp",
      texto1: "2020",
      texto2: "2020"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2020_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2020_1.webp",
      texto1: "2020",
      texto2: "2020"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2019_4.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2019_3.webp",
      texto1: "2019",
      texto2: "2019"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2019_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2019_1.webp",
      texto1: "2019",
      texto2: "2019"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2018_3.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2018_2.webp",
      texto1: "2018",
      texto2: "2018"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2018_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2016_y_2017_3.webp",
      texto1: "2018",
      texto2: "2016 y 2017"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2016_y_2017_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2016_y_2017_1.webp",
      texto1: "2016 y 2017",
      texto2: "2016 y 2017"
    },

   {
      grande: "assets/img/obrasocial/procasita/procasita_2015_3.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2015_2.webp",
      texto1: "2015",
      texto2: "2015"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2015_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2013_3.webp",
      texto1: "2015",
      texto2: "2013"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2013_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2013_1.webp",
      texto1: "2013",
      texto2: "2013"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2006_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2004_2.webp",
      texto1: "2006",
      texto2: "2004"
    },

    {
      grande: "assets/img/obrasocial/procasita/procasita_2004_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2003_3.webp",
      texto1: "2004",
      texto2: "2003"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2003_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2003_1.webp",
      texto1: "2003",
      texto2: "2003"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2002_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2001_4.webp",
      texto1: "2002",
      texto2: "2001"
    },

     {
      grande: "assets/img/obrasocial/procasita/procasita_2001_3.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_2001_2.webp",
      texto1: "2001",
      texto2: "2001"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_2001_1.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1998_3.webp",
      texto1: "2001",
      texto2: "1998"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_1998_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1998_1.webp",
      texto1: "1998",
      texto2: "1998"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_1997_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1997_1.webp",
      texto1: "1997",
      texto2: "1997"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_1995__96_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1995_y_96_1.webp",
      texto1: "1995 y 1996",
      texto2: "1995 y 1996"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_1992_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1992_visitando_la_casa_en_2015.webp",
      texto1: "1992",
      texto2: "1992 vista de visita en 2015"
    }, 

    {
      grande: "assets/img/obrasocial/procasita/procasita_1991_2.webp",
      pequena: "assets/img/obrasocial/procasita/procasita_1991_visitando_la_casa_en_2015.webp",
      texto1: "1991",
      texto2: "1991 vista de visita en 2015"
    }, 

    // 👉 SIGUE AGREGANDO AQUÍ TUS PAREJAS (con coma entre cada objeto)

  ];

  const container = document.getElementById("carouselProcasitaInner");

  // Limpiar por si acaso
  container.innerHTML = "";

  data.forEach((item, index) => {

    const activeClass = index === 0 ? "active" : "";

    const slide = `
      <div class="carousel-item ${activeClass}">
        <div class="row g-3">

          <div class="col-7">
            <div class="img-box">
              <a href="${item.grande}" class="glightbox" data-gallery="procasita">
                <div class="img-wrapper">
                  <img src="${item.grande}" class="gallery-img">
                </div>
              </a>
              <p class="small mt-2 text-center">${item.texto1}</p>
            </div>
          </div>

          <div class="col-5">
            <div class="img-box">
              <a href="${item.pequena}" class="glightbox" data-gallery="procasita">
                <div class="img-wrapper">
                  <img src="${item.pequena}" class="gallery-img">
                </div>
              </a>
              <p class="small mt-2 text-center">${item.texto2}</p>
            </div>
          </div>

        </div>
      </div>
    `;

    container.innerHTML += slide;
  });

  // 🔥 IMPORTANTE: reiniciar GLightbox después de generar contenido
  const lightbox = GLightbox({
    selector: '.glightbox'
  });

});