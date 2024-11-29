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

const cart = [];
const cartItemsList = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = parseFloat(button.dataset.price);
        addToCart(product, price);
    });
});

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    // Limpa os itens da lista
    cartItemsList.innerHTML = "";
    
    // Exibe os itens do carrinho
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Atualiza o total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Compra finalizada com sucesso!");
        // Aqui você pode adicionar a lógica para finalizar a compra, como enviar os dados para um servidor
        cart.length = 0; // Limpa o carrinho
        updateCart(); // Atualiza a visualização do carrinho
    } else {
        alert("O carrinho está vazio!");
    }
});
