(() => {
 const root=document.querySelector("[data-alumni-archive]");if(!root)return;
 // Registrar aquí solo promociones verificadas: {year:1998,title:"Promoción 1998",cover:"assets/img/exalumnos/promocion-1998.webp",photos:["assets/img/exalumnos/promocion-1998-02.webp"]}
 const promotions=[];
 const grid=root.querySelector("[data-alumni-grid]"),empty=root.querySelector("[data-alumni-empty]"),filters=root.querySelector("[data-alumni-filters]");
 const decades=[...new Set(promotions.map(p=>Math.floor(p.year/10)*10))].sort((a,b)=>b-a);
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 filters.innerHTML='<button class="decade-filter" data-decade="all" aria-pressed="true">Todas las generaciones</button>'+decades.map(d=>'<button class="decade-filter" data-decade="'+d+'" aria-pressed="false">'+d+'–'+(d+9)+'</button>').join("");
 grid.innerHTML=promotions.slice().sort((a,b)=>b.year-a.year).map(p=>{
  const title=p.title||"Promoción "+p.year;
  const cover=p.cover?'<img src="'+safe(p.cover)+'" alt="'+safe(title)+'" loading="lazy" decoding="async" width="800" height="600">':'<div class="alumni-cover-placeholder"><i class="bi bi-mortarboard" aria-hidden="true"></i><span>Generación SME</span></div>';
  const count=(p.photos||[]).length+(p.cover?1:0);
  return '<article class="alumni-memory-card" data-year="'+p.year+'" data-decade="'+Math.floor(p.year/10)*10+'"><button class="alumni-memory-cover" type="button" data-open-promotion="'+p.year+'" aria-label="Ver fotografías de '+safe(title)+'">'+cover+'<span class="alumni-memory-overlay"><i class="bi bi-images"></i> Ver recuerdos</span><span class="alumni-year-stamp">'+p.year+'</span></button><div class="alumni-memory-info"><span class="alumni-memory-kicker">GENERACIÓN SME</span><h3>'+safe(title)+'</h3><p><i class="bi bi-calendar3" aria-hidden="true"></i> Promoción '+p.year+'</p></div></article>';
 }).join("");
 const modal=document.createElement("div");modal.className="alumni-memory-modal";modal.hidden=true;modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-labelledby","alumni-modal-title");
 modal.innerHTML='<div class="alumni-memory-backdrop" data-close-alumni></div><section class="alumni-memory-panel"><header class="alumni-memory-modal-head"><div><p>Memoria SME</p><h2 id="alumni-modal-title"></h2></div><button type="button" data-close-alumni class="alumni-memory-close" aria-label="Cerrar"><i class="bi bi-x-lg"></i></button></header><div class="alumni-memory-modal-content"></div></section>';
 document.body.appendChild(modal);
 let previousFocus=null;
 function openPromotion(year){
  const p=promotions.find(x=>String(x.year)===String(year));if(!p)return;
  previousFocus=document.activeElement;
  modal.querySelector("#alumni-modal-title").textContent=p.title||"Promoción "+p.year;
  const photos=[...(p.cover?[p.cover]:[]),...(p.photos||[])];
  modal.querySelector(".alumni-memory-modal-content").innerHTML=photos.length?'<div class="alumni-memory-masonry">'+photos.map((src,i)=>'<a href="'+safe(src)+'" target="_blank" rel="noopener" class="alumni-memory-photo"><img src="'+safe(src)+'" alt="'+safe((p.title||"Promoción "+p.year)+" — fotografía "+(i+1))+'" loading="lazy" decoding="async" width="900" height="700"></a>').join("")+'</div>':'<p>Esta promoción aún no tiene fotografías incorporadas.</p>';
  modal.hidden=false;document.body.classList.add("alumni-modal-open");modal.querySelector(".alumni-memory-close").focus();
 }
 function close(){modal.hidden=true;document.body.classList.remove("alumni-modal-open");if(previousFocus)previousFocus.focus();}
 grid.addEventListener("click",e=>{const b=e.target.closest("[data-open-promotion]");if(b)openPromotion(b.dataset.openPromotion);});
 filters.addEventListener("click",e=>{const b=e.target.closest("[data-decade]");if(!b)return;filters.querySelectorAll("[data-decade]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));grid.querySelectorAll(".alumni-memory-card").forEach(card=>card.hidden=b.dataset.decade!=="all"&&card.dataset.decade!==b.dataset.decade);});
 modal.addEventListener("click",e=>{if(e.target.closest("[data-close-alumni]"))close();});
 document.addEventListener("keydown",e=>{if(!modal.hidden&&e.key==="Escape")close();});
 empty.hidden=promotions.length>0;
 if(!promotions.length){filters.hidden=true;empty.hidden=false;}
})();