/*=========================================================
    VISOR DEL CAMPUS
    PARTE 1 DE 3
=========================================================*/

/*=========================================================
    CATÁLOGO DE FOTOGRAFÍAS
=========================================================*/

const fotos = {

    /*=====================================================
        CAMPUS
    =====================================================*/

    vistaGeneral:{
        archivo:"campus-01-vista-general.webp",
        titulo:"Vista General del Campus"
    },

    vistaMontana:{
        archivo:"campus-02-vista-montana.webp",
        titulo:"Vista desde la Montaña"
    },

    plazoleta1:{
        archivo:"campus-03-plazoleta.webp",
        titulo:"Plazoleta Principal"
    },

    plazoleta2:{
        archivo:"campus-04-plazoleta.webp",
        titulo:"Plazoleta Principal"
    },

    zonas1:{
        archivo:"campus-05-zonas-verdes.webp",
        titulo:"Zonas Verdes"
    },

    zonas2:{
        archivo:"campus-06-zonas-verdes.webp",
        titulo:"Zonas Verdes"
    },

    zonas3:{
        archivo:"campus-07-zonas-verdes.webp",
        titulo:"Zonas Verdes"
    },

    /*=====================================================
        AMBIENTES ACADÉMICOS
    =====================================================*/

    biblioteca:{
        archivo:"academico-01-biblioteca.webp",
        titulo:"Biblioteca"
    },

    salones:{
        archivo:"academico-02-salones.webp",
        titulo:"Salones de Clase"
    },

    teatro:{
        archivo:"academico-03-teatro.webp",
        titulo:"Teatro"
    },

    preescolar1:{
        archivo:"academico-04-preescolar.webp",
        titulo:"Preescolar"
    },

    preescolar2:{
        archivo:"academico-05-preescolar.webp",
        titulo:"Preescolar"
    },

    preescolar3:{
        archivo:"academico-06-preescolar.webp",
        titulo:"Preescolar"
    },

    preescolar4:{
        archivo:"academico-07-preescolar.webp",
        titulo:"Preescolar"
    },

    /*=====================================================
        TECNOLOGÍA E INNOVACIÓN
    =====================================================*/

    laboratorio:{
        archivo:"innovacion-01-laboratorio.webp",
        titulo:"Laboratorio"
    },

    informatica:{
        archivo:"innovacion-02-informatica.webp",
        titulo:"Sala de Informática"
    },

    robotica:{
        archivo:"innovacion-03-robotica.webp",
        titulo:"Robótica"
    },

    ingles:{
        archivo:"innovacion-04-ingles.webp",
        titulo:"Laboratorio de Inglés"
    },

    maker:{
        archivo:"innovacion-05-maker.webp",
        titulo:"Espacio Maker"
    },

    steam:{
        archivo:"innovacion-06-steam.webp",
        titulo:"Aprendizaje STEAM"
    },

    tecnologia:{
        archivo:"innovacion-07-tecnologia.webp",
        titulo:"Tecnología"
    },

    /*=====================================================
        VIDA ESCOLAR
    =====================================================*/

    canchas1:{
        archivo:"vida-01-canchas.webp",
        titulo:"Escenarios Deportivos"
    },

    canchas2:{
        archivo:"vida-02-canchas.webp",
        titulo:"Escenarios Deportivos"
    },

    parque:{
        archivo:"vida-03-parque.webp",
        titulo:"Parque Infantil"
    },

    restaurante:{
        archivo:"vida-04-restaurante.webp",
        titulo:"Restaurante Escolar"
    },

    fuente:{
        archivo:"vida-05-fuente.webp",
        titulo:"Fuente Central"
    },

    corredores:{
        archivo:"vida-06-corredores.webp",
        titulo:"Corredores"
    },

    capilla:{
        archivo:"vida-07-capilla.webp",
        titulo:"Capilla"
    }

};


/*=========================================================
    RECORRIDOS
=========================================================*/

const recorridos = [

    {

        titulo:"Conoce nuestro Campus",

        descripcion:"Espacios abiertos, naturaleza y ambientes que reflejan la tranquilidad y belleza de nuestro colegio.",

        imagenes:[
            "vistaGeneral",
            "vistaMontana",
            "plazoleta1",
            "plazoleta2",
            "zonas1",
            "zonas2",
            "zonas3"
        ]

    },

    {

        titulo:"Ambientes Académicos",

        descripcion:"Aulas, biblioteca y espacios diseñados para favorecer el aprendizaje y la formación integral.",

        imagenes:[
            "biblioteca",
            "salones",
            "teatro",
            "preescolar1",
            "preescolar2",
            "preescolar3",
            "preescolar4"
        ]

    },

    {

        titulo:"Tecnología e Innovación",

        descripcion:"Laboratorios y ambientes especializados que impulsan la creatividad, la investigación y el aprendizaje tecnológico.",

        imagenes:[
            "laboratorio",
            "informatica",
            "robotica",
            "ingles",
            "maker",
            "steam",
            "tecnologia"
        ]

    },

    {

        titulo:"Vida Escolar",

        descripcion:"Espacios donde la convivencia, el deporte y la espiritualidad hacen parte de la experiencia educativa.",

        imagenes:[
            "canchas1",
            "canchas2",
            "parque",
            "restaurante",
            "fuente",
            "corredores",
            "capilla"
        ]

    }

];


/*=========================================================
    ESTADO
=========================================================*/

let recorridoActual = 0;

let lightbox = null;

/*=========================================================
    PLANTILLA DE IMAGEN
=========================================================*/

function crearImagen(clase, foto){

    return `

        <a
            href="assets/img/campus/${foto.archivo}"
            class="campus-gallery-card ${clase} glightbox"
            data-gallery="campus-gallery"
        >

            <img
                src="assets/img/campus/${foto.archivo}"
                alt="${foto.titulo}"
                loading="lazy">

            <div class="campus-gallery-caption">

                <span>${foto.titulo}</span>

            </div>

        </a>

    `;

}


/*=========================================================
    ACTUALIZAR CABECERA
=========================================================*/

function actualizarCabecera(){

    const recorrido = recorridos[recorridoActual];

    const titulo = document.getElementById("galleryTitle");
    const descripcion = document.getElementById("galleryDescription");

    if(titulo){

        titulo.textContent = recorrido.titulo;

    }

    if(descripcion){

        descripcion.textContent = recorrido.descripcion;

    }

}


/*=========================================================
    ACTUALIZAR INDICADOR
=========================================================*/

function actualizarIndicador(){

    const indicador = document.getElementById("galleryIndicator");

    if(!indicador) return;

    indicador.innerHTML = "";

    recorridos.forEach((recorrido,index)=>{

        indicador.innerHTML += `

            <span class="${
                index===recorridoActual
                ? "gallery-dot active"
                : "gallery-dot"
            }"></span>

        `;

    });

}


/*=========================================================
    RENDER DE LA GALERÍA
=========================================================*/

function renderGaleria(){

    actualizarCabecera();

    actualizarIndicador();

    const recorrido = recorridos[recorridoActual];

    const contenedor = document.getElementById("galleryContainer");

    let html = `

        <div class="campus-gallery-grid">

    `;

    recorrido.imagenes.forEach((id,index)=>{

        const foto = fotos[id];

        let clase = "";

        if(index===0){

            clase="campus-gallery-large";

        }

        if(index===5){

            clase="campus-gallery-wide";

        }

        html += crearImagen(clase,foto);

    });

    html += `

        </div>

    `;

    contenedor.innerHTML = html;

    if(lightbox){

        lightbox.destroy();

    }

    if(typeof GLightbox !== "undefined"){

        lightbox = GLightbox({

            selector:".glightbox"

        });

    }

}

/*=========================================================
    RECORRIDO SIGUIENTE
=========================================================*/

function siguienteRecorrido(){

    recorridoActual++;

    if(recorridoActual >= recorridos.length){

        recorridoActual = 0;

    }

    renderGaleria();

}


/*=========================================================
    RECORRIDO ANTERIOR
=========================================================*/

function recorridoAnterior(){

    recorridoActual--;

    if(recorridoActual < 0){

        recorridoActual = recorridos.length - 1;

    }

    renderGaleria();

}


/*=========================================================
    IR A UN RECORRIDO
=========================================================*/

function irARecorrido(indice){

    if(indice < 0 || indice >= recorridos.length){

        return;

    }

    recorridoActual = indice;

    renderGaleria();

}


/*=========================================================
    EVENTOS
=========================================================*/

function registrarEventos(){

    const btnNext = document.getElementById("btnNext");

    if(btnNext){

        btnNext.addEventListener("click", siguienteRecorrido);

    }

    const btnPrev = document.getElementById("btnPrev");

    if(btnPrev){

        btnPrev.addEventListener("click", recorridoAnterior);

    }

    const indicador = document.getElementById("galleryIndicator");

    if(indicador){

        indicador.addEventListener("click",(e)=>{

            if(!e.target.classList.contains("gallery-dot")){

                return;

            }

            const dots = [...indicador.querySelectorAll(".gallery-dot")];

            const indice = dots.indexOf(e.target);

            if(indice !== -1){

                irARecorrido(indice);

            }

        });

    }

}


/*=========================================================
    INICIALIZACIÓN
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    registrarEventos();

    renderGaleria();

});



