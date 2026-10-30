(() => {
 const root=document.querySelector("[data-alumni-archive]");if(!root)return;
 const fallbackPhoto="assets/img/campus/campus-03-plazoleta.webp";
 const crest="assets/img/simbolos/escudo_sme.webp";
 const photoByYear={1991:"assets/img/promociones_sme/1991.webp",
  1994:"assets/img/promociones_sme/1994.webp",
  1995:"assets/img/promociones_sme/1995.webp",
  1996:"assets/img/promociones_sme/1996.webp",
  1999:"assets/img/promociones_sme/1999.webp",
  2000:"assets/img/promociones_sme/2000.webp",
  2002:"assets/img/promociones_sme/2002.webp",
  2006:"assets/img/promociones_sme/2006.webp",
  2007:"assets/img/promociones_sme/2007.webp",
  2008:"assets/img/promociones_sme/2008.webp",
  2009:"assets/img/promociones_sme/2009.webp",
  2011:"assets/img/promociones_sme/2011.webp",
  2012:"assets/img/promociones_sme/2012.webp",
  2013:"assets/img/promociones_sme/2013.webp",
  2015:"assets/img/promociones_sme/2015.webp",
  2017:"assets/img/promociones_sme/2017.webp",
  2018:"assets/img/promociones_sme/2018.webp",
  2019:"assets/img/promociones_sme/2019.webp",
  2020:"assets/img/promociones_sme/2020.webp",
  2021:"assets/img/promociones_sme/2021.webp",
  2022:"assets/img/promociones_sme/2022.webp",
  2023:"assets/img/promociones_sme/2023.webp",
  2024:"assets/img/promociones_sme/2024.webp",
  2025:"assets/img/promociones_sme/2025.webp"};
 const promotions=Array.from({length:37},(_,i)=>{
  const year=2027-i;
  return {year,title:"Luz y Esperanza",cover:photoByYear[year]||fallbackPhoto,hasArchivePhoto:Boolean(photoByYear[year]),crest};
 });
 const stage=root.querySelector("[data-alumni-stage]");
 const rail=root.querySelector("[data-alumni-rail]");
 const timeline=root.querySelector("[data-alumni-timeline]");
 const empty=root.querySelector("[data-alumni-empty]");
 const help=root.querySelector("[data-alumni-help]");
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 let activeIndex=0,previousFocus=null,railCopies=3,railItemWidth=132;
 const total=promotions.length;
 const photoOf=p=>p.cover;
 const titleOf=p=>p.title||"Luz y Esperanza";
 function railMarkup(copy){return promotions.map((p,i)=>'<button type="button" class="alumni-generation-item" data-select-generation="'+i+'" data-rail-copy="'+copy+'" aria-pressed="'+(copy===1&&i===activeIndex)+'" aria-label="'+p.year+' — '+safe(titleOf(p))+'"><span class="alumni-rail-crest-wrap"><img class="alumni-rail-crest" src="'+crest+'" alt="" loading="lazy" decoding="async" width="28" height="28"></span><span class="alumni-rail-year">'+p.year+'</span><span class="alumni-rail-title">'+safe(titleOf(p))+'</span></button>').join("");}
 function renderRail(){rail.innerHTML=[0,1,2].map(railMarkup).join("");}
 function updateRailSelection(){
  rail.querySelectorAll("[data-select-generation]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.railCopy)===1&&Number(b.dataset.selectGeneration)===activeIndex)));
 }
 function renderStage(){
  const p=promotions[activeIndex];
  stage.innerHTML='<div class="alumni-feature-photo-wrap"><button type="button" class="alumni-feature-photo" data-enlarge-photo aria-label="Ampliar fotografía de la promoción '+p.year+'"><img src="'+photoOf(p)+'" alt="'+(p.hasArchivePhoto?'Fotografía de la promoción ':'Fotografía del colegio como imagen provisional para la promoción ')+p.year+'" decoding="async" fetchpriority="high"><span class="alumni-photo-enlarge"><i class="bi bi-arrows-fullscreen"></i> Ver fotografía</span></button><button type="button" class="alumni-stage-arrow alumni-stage-prev" data-step="-1" aria-label="Promoción anterior"><i class="bi bi-chevron-left"></i></button><button type="button" class="alumni-stage-arrow alumni-stage-next" data-step="1" aria-label="Promoción siguiente"><i class="bi bi-chevron-right"></i></button></div><div class="alumni-feature-caption"><div class="alumni-feature-title"><span class="alumni-feature-kicker">MEMORIA INSTITUCIONAL</span><h3>'+safe(titleOf(p))+'</h3><p><i class="bi bi-calendar3" aria-hidden="true"></i> Promoción · '+p.year+'</p>'+(p.hasArchivePhoto?'':'<span class="alumni-provisional-label"><i class="bi bi-info-circle"></i> Fotografía del colegio mientras se incorpora el registro de esta generación</span>')+'</div><span class="alumni-photo-count"><i class="bi bi-mortarboard" aria-hidden="true"></i> '+(activeIndex+1)+' / '+total+'</span></div>';
  updateRailSelection();
 }
 function centerSelected(copy=1,behavior="smooth"){
  const item=rail.querySelector('[data-rail-copy="'+copy+'"][data-select-generation="'+activeIndex+'"]');
  if(item){const left=item.offsetLeft-(rail.clientWidth-item.offsetWidth)/2;rail.scrollTo({left,behavior});}
 }
 function selectGeneration(i,copy=1,center=true){
  activeIndex=(i+total)%total;renderStage();if(center)centerSelected(copy);
 }
 const modal=document.createElement("div");modal.className="alumni-photo-lightbox";modal.hidden=true;modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-label","Fotografía ampliada de promoción");
 modal.innerHTML='<button type="button" class="alumni-lightbox-close" data-lightbox-close aria-label="Cerrar fotografía"><i class="bi bi-x-lg"></i></button><button type="button" class="alumni-lightbox-arrow alumni-lightbox-prev" data-lightbox-step="-1" aria-label="Fotografía anterior"><i class="bi bi-chevron-left"></i></button><div class="alumni-lightbox-content"><img alt=""><p></p></div><button type="button" class="alumni-lightbox-arrow alumni-lightbox-next" data-lightbox-step="1" aria-label="Fotografía siguiente"><i class="bi bi-chevron-right"></i></button>';
 document.body.appendChild(modal);
 function openLightbox(){previousFocus=document.activeElement;const img=modal.querySelector("img");img.src=photoOf(promotions[activeIndex]);img.alt="Promoción "+promotions[activeIndex].year+" — "+titleOf(promotions[activeIndex]);modal.querySelector("p").textContent=titleOf(promotions[activeIndex])+" · "+promotions[activeIndex].year+(promotions[activeIndex].hasArchivePhoto?"":" · Imagen provisional del colegio");modal.hidden=false;document.body.classList.add("alumni-lightbox-open");modal.querySelector(".alumni-lightbox-close").focus();}
 function closeLightbox(){modal.hidden=true;document.body.classList.remove("alumni-lightbox-open");previousFocus?.focus();}
 stage.addEventListener("click",e=>{if(e.target.closest("[data-enlarge-photo]")){openLightbox();return;}const step=e.target.closest("[data-step]");if(step)selectGeneration(activeIndex+Number(step.dataset.step));});
 rail.addEventListener("click",e=>{const b=e.target.closest("[data-select-generation]");if(b)selectGeneration(Number(b.dataset.selectGeneration),Number(b.dataset.railCopy));});
 root.querySelectorAll("[data-rail-scroll]").forEach(b=>b.addEventListener("click",()=>rail.scrollBy({left:b.dataset.railScroll==="left"?-300:300,behavior:"smooth"})));
 let recentering=false;
 rail.addEventListener("scroll",()=>{
  if(recentering)return;
  const max=rail.scrollWidth-rail.clientWidth;
  if(rail.scrollLeft<rail.clientWidth*.35||rail.scrollLeft>max-rail.clientWidth*.35){
   recentering=true;rail.style.scrollBehavior="auto";rail.scrollLeft=rail.scrollLeft<rail.clientWidth*.35?rail.scrollLeft+rail.scrollWidth/3:rail.scrollLeft-rail.scrollWidth/3;requestAnimationFrame(()=>{rail.style.scrollBehavior="";recentering=false;});
  }
 },{passive:true});
 modal.addEventListener("click",e=>{if(e.target.closest("[data-lightbox-close]"))closeLightbox();const step=e.target.closest("[data-lightbox-step]");if(step)selectGeneration(activeIndex+Number(step.dataset.lightboxStep));});
 document.addEventListener("keydown",e=>{if(modal.hidden)return;if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft")selectGeneration(activeIndex-1);if(e.key==="ArrowRight")selectGeneration(activeIndex+1);});
 rail.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();selectGeneration(activeIndex+(e.key==="ArrowRight"?1:-1));}});
 timeline.hidden=false;empty.hidden=true;help.hidden=false;renderRail();renderStage();
 requestAnimationFrame(()=>centerSelected(1,"auto"));
})();