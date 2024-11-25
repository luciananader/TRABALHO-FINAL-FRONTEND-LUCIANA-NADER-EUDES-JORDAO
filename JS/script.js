let currentIndex = 0;

function moveLeft() {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
}

function moveRight() {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}

function updateCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

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