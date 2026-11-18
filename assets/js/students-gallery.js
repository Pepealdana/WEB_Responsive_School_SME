(() => {
 const root=document.querySelector("[data-students-gallery]");
 if(!root)return;
 const dims=[
  {id:"cognitiva",title:"Dimensión Cognitiva",short:"Aprender, analizar y proponer",icon:"bi-lightbulb",color:"#2468a2",soft:"#e6f2ff",desc:"Persona con procesos mentales y cognitivos desarrollados, que, con criterios éticos, analice y proponga soluciones en su entorno cotidiano a través de sus conocimientos.",photos:[
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_09.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_10.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_11.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_12.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_13.webp"},
   {src:"assets/img/fotos_dimensiones/d.cognitiva/d.cognitiva_14.webp"}
  ]},
  {id:"espiritual",title:"Dimensión Espiritual",short:"Fe, sentido y propósito",icon:"bi-heart",color:"#7650a6",soft:"#f0eaff",desc:"Persona que vive una relación personal con Dios Padre-Hijo y Espíritu Santo desde la cual construye su vida y trabaja por la construcción del Reino de Dios.",photos:[
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_09.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_10.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_11.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_12.webp"},
   {src:"assets/img/fotos_dimensiones/d.espiritual/d.espiritual_13.webp"}
  ]},
  {id:"afectiva",title:"Dimensión Afectiva",short:"Reconocer, cuidar y amar",icon:"bi-heart-fill",color:"#b33b5b",soft:"#ffe8ee",desc:"Persona asertiva con equilibrio emocional, que se ame a sí misma y pueda amar y dejarse amar.",photos:[
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_09.webp"},
   {src:"assets/img/fotos_dimensiones/d.afectiva/d.afectiva_10.webp"}
  ]},
  {id:"interpersonal-social",title:"Dimensión Interpersonal y Social",short:"Convivir y construir el bien común",icon:"bi-people",color:"#23784b",soft:"#e4f5e9",desc:"Persona capaz de buscar el bien común, respetando sus derechos y los de los demás, solucionando conflictos y trabajando en equipo.",photos:[
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_09.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_10.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_11.webp"},
   {src:"assets/img/fotos_dimensiones/d.interpersonal/d.interpersonal_12.webp"}
  ]},
  {id:"estetica",title:"Dimensión Estética",short:"Crear, apreciar y armonizar",icon:"bi-palette",color:"#a65b13",soft:"#fff0dc",desc:"Persona que aprecia la armonía y la belleza como parte de la proyección de su interioridad y la de los demás y cultiva la estética en su presentación personal y en su relación con el entorno.",photos:[
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.estetica/d.estetica_09.webp"}
  ]},
  {id:"fisica-corporal",title:"Dimensión Física Corporal",short:"Cuidar el cuerpo y el entorno",icon:"bi-bicycle",color:"#137887",soft:"#e0f5f7",desc:"Persona capaz de cuidar y promover el equilibrio y el desarrollo de su propio cuerpo y del medio ambiente que la rodea.",photos:[
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_01.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_02.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_03.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_04.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_05.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_06.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_07.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_08.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_09.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_10.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_11.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_12.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_13.webp"},
   {src:"assets/img/fotos_dimensiones/d.fisica/d.fisica_14.webp"}
  ]}
 ];
 const filters=root.querySelector("[data-dimension-filters]");
 const grid=root.querySelector("[data-dimension-grid]");
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 filters.innerHTML='<button class="dimension-filter" data-filter="all" aria-pressed="true">Todas las dimensiones</button>'+dims.map(d=>'<button class="dimension-filter" data-filter="'+d.id+'" aria-pressed="false">'+safe(d.title.replace("Dimensión ",""))+'</button>').join("");
 const cover=d=>d.photos.length
  ? '<button class="dimension-cover-button" type="button" data-open-gallery="'+d.id+'" aria-label="Abrir galería de '+safe(d.title)+'"><img src="'+safe(d.photos[0].src)+'" alt="'+safe(d.photos[0].alt||d.title)+'" loading="lazy" decoding="async" fetchpriority="low" width="900" height="650"><span class="dimension-cover-overlay"><i class="bi bi-images"></i> Ver galería <b>'+d.photos.length+'</b></span></button>'
  : '<button class="dimension-cover-button dimension-cover-empty" type="button" data-open-gallery="'+d.id+'" aria-label="Abrir galería de '+safe(d.title)+'"><span class="cover-art"><i class="bi '+d.icon+'"></i></span><span class="cover-label"><i class="bi bi-images"></i> Galería fotográfica</span><span class="dimension-cover-overlay"><i class="bi bi-images"></i> Preparar galería</span></button>';
 grid.innerHTML=dims.map(d=>'<article class="dimension-card" data-dimension-card="'+d.id+'" style="--dimension:'+d.color+';--dimension-soft:'+d.soft+'"><div class="dimension-card-head"><span class="dimension-icon"><i class="bi '+d.icon+'" aria-hidden="true"></i></span><div><h3>'+safe(d.title)+'</h3><p class="dimension-short">'+safe(d.short)+'</p></div></div>'+cover(d)+'<div class="dimension-card-body"><p>'+safe(d.desc)+'</p></div></article>').join("");
 const modal=document.createElement("div");
 modal.className="dimension-gallery-modal";
 modal.hidden=true;
 modal.setAttribute("role","dialog");
 modal.setAttribute("aria-modal","true");
 modal.setAttribute("aria-labelledby","dimension-gallery-title");
 modal.innerHTML='<div class="dimension-modal-backdrop" data-close-gallery></div><section class="dimension-modal-panel"><header class="dimension-modal-header"><div><p class="dimension-modal-kicker">Galería de vida escolar</p><h2 id="dimension-gallery-title"></h2></div><button type="button" class="dimension-modal-close" data-close-gallery aria-label="Cerrar galería"><i class="bi bi-x-lg"></i></button></header><div class="dimension-modal-content"></div></section>';
 document.body.appendChild(modal);
 const title=modal.querySelector("#dimension-gallery-title"),content=modal.querySelector(".dimension-modal-content");
 const lightbox=document.createElement("div");
 lightbox.className="dimension-lightbox";
 lightbox.hidden=true;
 lightbox.setAttribute("role","dialog");
 lightbox.setAttribute("aria-modal","true");
 lightbox.setAttribute("aria-label","Visor de fotografías");
 lightbox.innerHTML='<button type="button" class="dimension-lightbox-close" data-lightbox-close aria-label="Cerrar fotografía"><i class="bi bi-x-lg"></i></button><button type="button" class="dimension-lightbox-nav dimension-lightbox-prev" data-lightbox-prev aria-label="Fotografía anterior"><i class="bi bi-chevron-left"></i></button><figure class="dimension-lightbox-figure"><img class="dimension-lightbox-image" alt=""><figcaption class="dimension-lightbox-counter" aria-live="polite"></figcaption></figure><button type="button" class="dimension-lightbox-nav dimension-lightbox-next" data-lightbox-next aria-label="Fotografía siguiente"><i class="bi bi-chevron-right"></i></button>';
 document.body.appendChild(lightbox);
 const lightboxImage=lightbox.querySelector(".dimension-lightbox-image");
 const lightboxCounter=lightbox.querySelector(".dimension-lightbox-counter");
 let activeDimension=null,activePhotoIndex=0;
 function showLightboxImage(index){
  if(!activeDimension||!activeDimension.photos.length)return;
  activePhotoIndex=(index+activeDimension.photos.length)%activeDimension.photos.length;
  const photo=activeDimension.photos[activePhotoIndex];
  lightboxImage.src=photo.src;
  lightboxImage.alt=photo.alt||activeDimension.title+" — fotografía "+(activePhotoIndex+1);
  lightboxCounter.textContent=activeDimension.title+" · "+(activePhotoIndex+1)+" de "+activeDimension.photos.length;
 }
 function openLightbox(index){
  if(!activeDimension)return;
  showLightboxImage(index);
  lightbox.hidden=false;
  lightbox.querySelector(".dimension-lightbox-close").focus();
 }
 function closeLightbox(){
  lightbox.hidden=true;
  lightboxImage.removeAttribute("src");
 }
 function moveLightbox(step){showLightboxImage(activePhotoIndex+step);}

 let lastFocus=null;
 function openGallery(id){
  const d=dims.find(x=>x.id===id);if(!d)return;
  lastFocus=document.activeElement;
  modal.style.setProperty("--dimension",d.color);modal.style.setProperty("--dimension-soft",d.soft);
  title.textContent=d.title;
  activeDimension=d;
  content.innerHTML=d.photos.length
   ? '<div class="dimension-photo-masonry">'+d.photos.map((p,i)=>'<div class="dimension-photo-item"><button class="dimension-lightbox-trigger" type="button" data-lightbox-index="'+i+'" aria-label="Ampliar fotografía '+(i+1)+' de '+d.photos.length+'"><img src="'+safe(p.src)+'" alt="'+safe(p.alt||d.title+" — fotografía "+(i+1))+'" loading="lazy" decoding="async" fetchpriority="low" width="900" height="700"></button></div>').join("")+'</div>'
   : '<div class="dimension-gallery-empty"><span class="dimension-gallery-empty-icon"><i class="bi bi-images"></i></span><h3>Esta galería se está preparando</h3><p>Aquí aparecerán las fotografías de la '+safe(d.title.toLowerCase())+', organizadas en un mosaico visual. La tarjeta ya está preparada para recibirlas.</p></div>';
  modal.hidden=false;document.body.classList.add("dimension-modal-open");
  modal.querySelector(".dimension-modal-close").focus();
 }
 function closeGallery(){closeLightbox();modal.hidden=true;document.body.classList.remove("dimension-modal-open");activeDimension=null;if(lastFocus)lastFocus.focus();}
 root.addEventListener("click",e=>{const b=e.target.closest("[data-open-gallery]");if(b)openGallery(b.dataset.openGallery);});
 filters.addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;filters.querySelectorAll("[data-filter]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));grid.querySelectorAll("[data-dimension-card]").forEach(card=>card.hidden=b.dataset.filter!=="all"&&card.dataset.dimensionCard!==b.dataset.filter);});
 modal.addEventListener("click",e=>{
  if(e.target.closest("[data-close-gallery]")){closeGallery();return;}
  const trigger=e.target.closest("[data-lightbox-index]");
  if(trigger)openLightbox(Number(trigger.dataset.lightboxIndex));
 });
 lightbox.addEventListener("click",e=>{
  if(e.target.closest("[data-lightbox-close]"))closeLightbox();
  else if(e.target.closest("[data-lightbox-prev]"))moveLightbox(-1);
  else if(e.target.closest("[data-lightbox-next]"))moveLightbox(1);
 });
 let touchStartX=0;
 lightbox.addEventListener("touchstart",e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});
 lightbox.addEventListener("touchend",e=>{
  const delta=e.changedTouches[0].screenX-touchStartX;
  if(Math.abs(delta)>45)moveLightbox(delta<0?1:-1);
 },{passive:true});
 document.addEventListener("keydown",e=>{
  if(!modal.hidden&&lightbox.hidden&&e.key==="Escape"){closeGallery();return;}
  if(lightbox.hidden)return;
  if(e.key==="Escape")closeLightbox();
  else if(e.key==="ArrowRight")moveLightbox(1);
  else if(e.key==="ArrowLeft")moveLightbox(-1);
 });
})();