document.addEventListener('DOMContentLoaded', function() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensCarrinho = document.getElementById('itensCarrinho');
    let totalPagamento = 0;

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="product-image">
            <span>${item.nome} - R$ ${item.preco.toFixed(2)} x </span>
            <button onclick="diminuirQuantidade(${index})">-</button>
            <span>${item.quantidade}</span>
            <button onclick="aumentarQuantidade(${index})">+</button>
        `;
        itensCarrinho.appendChild(itemElement);
        totalPagamento += item.preco * item.quantidade;
    });

    document.getElementById('totalPagamento').textContent = totalPagamento.toFixed(2);
});

function aumentarQuantidade(index) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho[index].quantidade++;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.reload(); // Recarrega a página para atualizar a interface
}

function diminuirQuantidade(index) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        window.location.reload(); // Recarrega a página para atualizar a interface
    }
}

document.getElementById('mostrarPix').addEventListener('click', function() {
    document.getElementById('opcaoPix').style.display = 'block';
    document.getElementById('opcaoCartao').style.display = 'none';
});

document.getElementById('mostrarCartao').addEventListener('click', function() {
    document.getElementById('opcaoCartao').style.display = 'block';
    document.getElementById('opcaoPix').style.display = 'none';
});

document.getElementById('formCartao').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Processando pagamento via cartão de crédito.");
})