(() => {
 const root=document.querySelector("[data-students-gallery]"); if(!root)return;
 const dims=[
 ["cognitiva","Dimensión Cognitiva","Aprender, analizar y proponer","bi-lightbulb","#2468a2","#e6f2ff","Persona con procesos mentales y cognitivos desarrollados, que, con criterios éticos, analice y proponga soluciones en su entorno cotidiano a través de sus conocimientos."],
 ["espiritual","Dimensión Espiritual","Fe, sentido y propósito","bi-heart","#7650a6","#f0eaff","Persona que vive una relación personal con Dios Padre-Hijo y Espíritu Santo desde la cual construye su vida y trabaja por la construcción del Reino de Dios."],
 ["afectiva","Dimensión Afectiva","Reconocer, cuidar y amar","bi-heart-fill","#b33b5b","#ffe8ee","Persona asertiva con equilibrio emocional, que se ame a sí misma y pueda amar y dejarse amar."],
 ["interpersonal-social","Dimensión Interpersonal y Social","Convivir y construir el bien común","bi-people","#23784b","#e4f5e9","Persona capaz de buscar el bien común, respetando sus derechos y los de los demás, solucionando conflictos y trabajando en equipo."],
 ["estetica","Dimensión Estética","Crear, apreciar y armonizar","bi-palette","#a65b13","#fff0dc","Persona que aprecia la armonía y la belleza como parte de la proyección de su interioridad y la de los demás y cultiva la estética en su presentación personal y en su relación con el entorno."],
 ["fisica-corporal","Dimensión Física Corporal","Cuidar el cuerpo y el entorno","bi-bicycle","#137887","#e0f5f7","Persona capaz de cuidar y promover el equilibrio y el desarrollo de su propio cuerpo y del medio ambiente que la rodea."]
 ];
 const filters=root.querySelector("[data-dimension-filters]"),grid=root.querySelector("[data-dimension-grid]");
 filters.innerHTML='<button class="dimension-filter" data-filter="all" aria-pressed="true">Todas las dimensiones</button>'+dims.map(d=>'<button class="dimension-filter" data-filter="'+d[0]+'" aria-pressed="false">'+d[1].replace("Dimensión ","")+'</button>').join("");
 grid.innerHTML=dims.map(d=>'<article class="dimension-card" data-dimension-card="'+d[0]+'" style="--dimension:'+d[4]+';--dimension-soft:'+d[5]+'"><div class="dimension-card-head"><span class="dimension-icon"><i class="bi '+d[3]+'" aria-hidden="true"></i></span><div><h3>'+d[1]+'</h3><p class="dimension-short">'+d[2]+'</p></div></div><div class="dimension-card-body"><p>'+d[6]+'</p><div class="dimension-empty mt-3" aria-label="Espacio para fotografías"><i class="bi bi-images" aria-hidden="true"></i><span>Galería próximamente</span></div></div></article>').join("");
 filters.addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;filters.querySelectorAll("[data-filter]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));grid.querySelectorAll("[data-dimension-card]").forEach(card=>card.hidden=b.dataset.filter!=="all"&&card.dataset.dimensionCard!==b.dataset.filter);});
})();
