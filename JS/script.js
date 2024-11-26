let indice = 0; // Começa no primeiro item
const slides = document.querySelectorAll('.carrossel-slide'); // Seleciona todas as imagens
const totalSlides = slides.length; // Total de slides

function moverCarrossel(direction) {
  indice += direction; // Incrementa ou decrementa o índice

  // Verifica se o índice está fora dos limites
  if (indice < 0) {
    indice = totalSlides - 1; // Vai para o último slide
  } else if (indice >= totalSlides) {
    indice = 0; // Vai para o primeiro slide
  }

  // Altera a posição do carrossel para mostrar o slide correto
  const carrosselContainer = document.querySelector('.carrossel-container');
  carrosselContainer.style.transform = `translateX(-${indice * 50}%)`;
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

