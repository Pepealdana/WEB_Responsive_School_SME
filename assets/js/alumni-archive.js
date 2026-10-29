(() => {
 const root=document.querySelector("[data-alumni-archive]");if(!root)return;
 /*
  Añade aquí promociones verificadas:
  {
    year:2010,
    title:"Promoción 2010", // si no hay nombre especial, se muestra "Promoción 2010"
    cover:"assets/img/exalumnos/promocion-2010.webp",
    photos:["assets/img/exalumnos/promocion-2010-02.webp"],
    crest:"assets/img/apple-touch-icon.png" // opcional: escudo correspondiente a esa generación
  }
  Cada promoción puede tener una sola foto o muchas. El campo crest permite asignar un escudo diferente a cada generación.
 */
 const promotions=[];
 const stage=root.querySelector("[data-alumni-stage]");
 const rail=root.querySelector("[data-alumni-rail]");
 const timeline=root.querySelector("[data-alumni-timeline]");
 const empty=root.querySelector("[data-alumni-empty]");
 const help=root.querySelector("[data-alumni-help]");
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const sorted=promotions.filter(p=>Number.isInteger(Number(p.year))).slice().sort((a,b)=>a.year-b.year);
 let activeIndex=0,previousFocus=null;
 const fallbackCrest="assets/img/apple-touch-icon.png";
 function allPhotos(p){return [...(p.cover?[p.cover]:[]),...(p.photos||[])];}
 function titleOf(p){return p.title||"Promoción "+p.year;}
 function renderRail(){
  rail.innerHTML=sorted.map((p,i)=>'<button type="button" class="alumni-generation-item" data-select-generation="'+i+'" aria-pressed="'+(i===activeIndex)+'" aria-label="'+safe(titleOf(p))+' — '+p.year+'"><span class="alumni-rail-crest-wrap"><img class="alumni-rail-crest" src="'+safe(p.crest||fallbackCrest)+'" alt="" loading="lazy" decoding="async" width="28" height="28"></span><span class="alumni-rail-year">'+p.year+'</span><span class="alumni-rail-title">'+safe(titleOf(p))+'</span></button>').join("");
 }
 function renderStage(){
  const p=sorted[activeIndex];if(!p)return;
  const photos=allPhotos(p),cover=p.cover||photos[0];
  stage.innerHTML='<div class="alumni-feature-photo-wrap"><button type="button" class="alumni-feature-photo" data-enlarge-photo aria-label="Ampliar fotografía de '+safe(titleOf(p))+'">'+(cover?'<img src="'+safe(cover)+'" alt="'+safe(titleOf(p))+'" decoding="async" fetchpriority="high">':'<span class="alumni-stage-mark"><i class="bi bi-mortarboard" aria-hidden="true"></i></span>')+'<span class="alumni-photo-enlarge"><i class="bi bi-arrows-fullscreen"></i> Ampliar fotografía</span></button><button type="button" class="alumni-stage-arrow alumni-stage-prev" data-step="-1" aria-label="Ver promoción anterior" '+(activeIndex===0?'disabled':'')+'><i class="bi bi-chevron-left"></i></button><button type="button" class="alumni-stage-arrow alumni-stage-next" data-step="1" aria-label="Ver promoción siguiente" '+(activeIndex===sorted.length-1?'disabled':'')+'><i class="bi bi-chevron-right"></i></button></div><div class="alumni-feature-caption"><div class="alumni-feature-title"><span class="alumni-feature-kicker">MEMORIA INSTITUCIONAL</span><h3>'+safe(titleOf(p))+'</h3><p><i class="bi bi-calendar3" aria-hidden="true"></i> Año de graduación · '+p.year+'</p></div><span class="alumni-photo-count"><i class="bi bi-images" aria-hidden="true"></i> '+photos.length+' '+(photos.length===1?'fotografía':'fotografías')+'</span></div>';
  rail.querySelectorAll("[data-select-generation]").forEach((b,i)=>{b.setAttribute("aria-pressed",String(i===activeIndex));});
 }
 function selectGeneration(i,scroll=true){if(i<0||i>=sorted.length)return;activeIndex=i;renderStage();if(scroll){const b=rail.querySelector('[data-select-generation="'+i+'"]');b?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});}}
 const modal=document.createElement("div");modal.className="alumni-photo-lightbox";modal.hidden=true;modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-label","Fotografía ampliada de promoción");
 modal.innerHTML='<button type="button" class="alumni-lightbox-close" data-lightbox-close aria-label="Cerrar fotografía"><i class="bi bi-x-lg"></i></button><button type="button" class="alumni-lightbox-arrow alumni-lightbox-prev" data-lightbox-step="-1" aria-label="Fotografía anterior"><i class="bi bi-chevron-left"></i></button><div class="alumni-lightbox-content"><img alt=""><p></p></div><button type="button" class="alumni-lightbox-arrow alumni-lightbox-next" data-lightbox-step="1" aria-label="Fotografía siguiente"><i class="bi bi-chevron-right"></i></button>';
 document.body.appendChild(modal);
 let lightboxPhotos=[],lightboxIndex=0;
 function renderLightbox(){const img=modal.querySelector("img");img.src=lightboxPhotos[lightboxIndex];img.alt=titleOf(sorted[activeIndex])+" — fotografía "+(lightboxIndex+1);modal.querySelector("p").textContent=titleOf(sorted[activeIndex])+" · "+sorted[activeIndex].year+" · "+(lightboxIndex+1)+" de "+lightboxPhotos.length;modal.querySelector(".alumni-lightbox-prev").disabled=lightboxIndex===0;modal.querySelector(".alumni-lightbox-next").disabled=lightboxIndex===lightboxPhotos.length-1;}
 function openLightbox(){const p=sorted[activeIndex];lightboxPhotos=allPhotos(p);if(!lightboxPhotos.length)return;previousFocus=document.activeElement;lightboxIndex=0;renderLightbox();modal.hidden=false;document.body.classList.add("alumni-lightbox-open");modal.querySelector(".alumni-lightbox-close").focus();}
 function closeLightbox(){modal.hidden=true;document.body.classList.remove("alumni-lightbox-open");if(previousFocus)previousFocus.focus();}
 stage.addEventListener("click",e=>{const enlarge=e.target.closest("[data-enlarge-photo]");if(enlarge){openLightbox();return;}const step=e.target.closest("[data-step]");if(step)selectGeneration(activeIndex+Number(step.dataset.step));});
 rail.addEventListener("click",e=>{const b=e.target.closest("[data-select-generation]");if(b)selectGeneration(Number(b.dataset.selectGeneration),false);});
 root.querySelectorAll("[data-rail-scroll]").forEach(b=>b.addEventListener("click",()=>rail.scrollBy({left:b.dataset.railScroll==="left"?-280:280,behavior:"smooth"})));
 modal.addEventListener("click",e=>{const close=e.target.closest("[data-lightbox-close]");if(close){closeLightbox();return;}const step=e.target.closest("[data-lightbox-step]");if(step){const next=lightboxIndex+Number(step.dataset.lightboxStep);if(next>=0&&next<lightboxPhotos.length){lightboxIndex=next;renderLightbox();}}});
 document.addEventListener("keydown",e=>{if(modal.hidden)return;if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft"&&lightboxIndex>0){lightboxIndex--;renderLightbox();}if(e.key==="ArrowRight"&&lightboxIndex<lightboxPhotos.length-1){lightboxIndex++;renderLightbox();}});
 if(sorted.length){
  empty.hidden=true;timeline.hidden=false;help.hidden=false;renderRail();renderStage();
  rail.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();selectGeneration(activeIndex+(e.key==="ArrowRight"?1:-1));}});
 }else{
  timeline.hidden=true;help.hidden=true;empty.hidden=true;
  stage.innerHTML='<div class="alumni-stage-placeholder"><span class="alumni-stage-mark"><i class="bi bi-images" aria-hidden="true"></i></span><h3>Una historia, muchas generaciones</h3><p>La fotografía de cada promoción aparecerá aquí. Cuando incorporemos los años y las imágenes, podrás recorrer las generaciones desde la línea de tiempo inferior.</p><span class="alumni-stage-hint"><i class="bi bi-arrow-down" aria-hidden="true"></i> Archivo fotográfico en preparación</span></div>';
 }
})();