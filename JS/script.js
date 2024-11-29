let indice = 0; 
const slides = document.querySelectorAll('.carrossel-slide'); 
const totalSlides = slides.length;

function moverCarrossel(direction) {
  indice += direction; 

  
  if (indice < 0) {
    indice = totalSlides - 1;
  } else if (indice >= totalSlides) {
    indice = 0; 
  }


  const carrosselContainer = document.querySelector('.carrossel-container');
  carrosselContainer.style.transform = `translateX(-${indice * 60}%)`;
}



// galeria dinamica
const imagens = document.querySelectorAll("ul img");

function trocar(event){
    const principal = document.querySelector("#imagem-principal");
    const clicada = event.target;
    principal.src = clicada.src;
    principal.alt = clicada.alt;
}

function selecionarItens(item){
    item.addEventListener("click", trocar);
    
}

imagens.forEach(selecionarItens);

