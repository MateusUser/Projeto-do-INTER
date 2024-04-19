
let carrinho = [];

// Variáveis de controle do usuário
let usuarioLogado = false; // Exemplo: o usuário não está logado inicialmente
let enderecoSelecionado = false; // Exemplo: nenhum endereço selecionado inicialmente

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem, tamanho) {
    // Encontra item no carrinho que corresponde ao nome e ao tamanho
    let itemExistente = carrinho.find(item => item.nome === nome && item.tamanho === tamanho);

    if (itemExistente) {
        // Se o item já existe, apenas incrementa a quantidade
        itemExistente.quantidade++;
    } else {
        // Se não existe, cria um novo item no carrinho com quantidade inicial 1
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1,
            imagem: imagem,
            tamanho: tamanho
        });
    }
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarModalCarrinho(); 
}


function aumentarQuantidade(index) {
    carrinho[index].quantidade++;
    atualizarModalCarrinho(); 
}


function diminuirQuantidade(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }
    atualizarModalCarrinho(); 
}


function atualizarModalCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-items');
    const totalCarrinhoElement = document.getElementById('total-carrinho');
    carrinhoContainer.innerHTML = '';
    let totalCarrinho = 0;

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; margin-right: 10px;">
            <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            <span> x ${item.quantidade}</span>
            <button onclick="aumentarQuantidade(${index})">+</button>
            <button onclick="diminuirQuantidade(${index})">-</button>
            <button onclick="removerDoCarrinho(${index})">Remove</button>
        `;
        carrinhoContainer.appendChild(itemElement);
        totalCarrinho += item.preco * item.quantidade;
    });
    totalCarrinhoElement.textContent = totalCarrinho.toFixed(2);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

document.getElementById('finalizar-compra').addEventListener('click', function() {
    window.location.href = 'pagamento.html';
});

document.addEventListener('DOMContentLoaded', atualizarModalCarrinho);


function abrirModalCarrinho() {
    atualizarModalCarrinho(); 
    document.getElementById('modalCarrinho').style.display = 'block'; 
}


function fecharModalCarrinho() {
    document.getElementById('modalCarrinho').style.display = 'none';
}


function limparCarrinho() {
    carrinho = [];
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}
function finalizarCompra() {
    // Inclua suas verificações e lógica existente aqui...

    // Ao passar todas as verificações:
    window.location.href = 'pagamento.html'; // Redireciona para a página de pagamento
}

document.getElementById('limpar-carrinho').addEventListener('click', limparCarrinho);