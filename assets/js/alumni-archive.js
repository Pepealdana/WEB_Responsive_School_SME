(() => {
 const root=document.querySelector("[data-alumni-archive]");if(!root)return;
 // Agregar aquí solo promociones confirmadas: {year:1998,title:"Nombre",cover:"assets/img/exalumnos/promocion-1998.webp"}
 const promotions=[];
 const grid=root.querySelector("[data-alumni-grid]"),empty=root.querySelector("[data-alumni-empty]"),search=root.querySelector("[data-alumni-search]"),filters=root.querySelector("[data-alumni-filters]");
 const decades=[...new Set(promotions.map(p=>Math.floor(p.year/10)*10))].sort((a,b)=>b-a);
 filters.innerHTML='<button class="decade-filter" data-decade="all" aria-pressed="true">Todas</button>'+decades.map(d=>'<button class="decade-filter" data-decade="'+d+'" aria-pressed="false">Años '+String(d).slice(-2)+'</button>').join("");
 grid.innerHTML=promotions.map(p=>'<article class="alumni-promotion" data-year="'+p.year+'" data-decade="'+Math.floor(p.year/10)*10+'" data-search="'+(p.title||"").toLowerCase()+'"><div class="alumni-cover">'+(p.cover?'<img src="'+p.cover+'" alt="Promoción '+p.year+'" loading="lazy" decoding="async" width="640" height="420">':'<div><i class="bi bi-mortarboard" aria-hidden="true"></i><div class="alumni-year">'+p.year+'</div></div>')+'</div><div class="alumni-promotion-body"><p class="small text-muted">PROMOCIÓN '+p.year+'</p><h3>'+(p.title||"Generación "+p.year)+'</h3></div></article>').join("");
 let decade="all";
 function apply(){const q=search.value.trim().toLowerCase();let count=0;grid.querySelectorAll(".alumni-promotion").forEach(card=>{const ok=(decade==="all"||card.dataset.decade===decade)&&(card.dataset.search.includes(q)||card.dataset.year.includes(q));card.hidden=!ok;if(ok)count++;});empty.hidden=count>0;empty.querySelector("h3").textContent=promotions.length?"No encontramos promociones con esos criterios":"Estamos organizando nuestro archivo histórico";empty.querySelector("p").textContent=promotions.length?"Prueba con otro año, nombre o década.":"Pronto incorporaremos las fotografías y los nombres confirmados. Algunas generaciones pueden no contar con registro fotográfico."}
 filters.addEventListener("click",e=>{const b=e.target.closest("[data-decade]");if(!b)return;decade=b.dataset.decade;filters.querySelectorAll("[data-decade]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));apply();});
 search.addEventListener("input",apply);
 if(!promotions.length){filters.hidden=true;search.disabled=true;search.placeholder="El buscador estará disponible al incorporar promociones";}
 apply();
})();
