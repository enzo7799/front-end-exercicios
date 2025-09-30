const inputItem = document.getElementById('novo-item');
const inputNome = document.getElementById('nome-pessoa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaItens = document.getElementById('lista-itens');
const contador = document.getElementById('contador');

let totalItens = 0;

// Função para atualizar o contador
function atualizarContador() {
    contador.textContent = totalItens;
}

// Função para adicionar item
function adicionarItem() {
    const textoItem = inputItem.value.trim();
    if (!textoItem) return;

    // Criar o HTML do item
    const novoItem = document.createElement('div');
    novoItem.className = 'item disponivel';
    novoItem.innerHTML = `
        <span class="nome-item">${textoItem}</span>
        <span class="quem-traz"></span>
        <button class="btn-trazer">Eu trago!</button>
        <button class="btn-cancelar" style="display:none;">Cancelar</button>
    `;

    // Evento para voluntariar-se
    novoItem.querySelector('.btn-trazer').addEventListener('click', function() {
        const nome = inputNome.value.trim();
        if (!nome) return;
        novoItem.classList.remove('disponivel');
        novoItem.classList.add('reservado');
        novoItem.querySelector('.quem-traz').textContent = `Quem traz: ${nome}`;
        this.style.display = 'none';
        novoItem.querySelector('.btn-cancelar').style.display = '';
    });

    // Evento para cancelar reserva
    novoItem.querySelector('.btn-cancelar').addEventListener('click', function() {
        novoItem.classList.remove('reservado');
        novoItem.classList.add('disponivel');
        novoItem.querySelector('.quem-traz').textContent = '';
        this.style.display = 'none';
        novoItem.querySelector('.btn-trazer').style.display = '';
    });

    listaItens.appendChild(novoItem);
    totalItens++;
    atualizarContador();
    inputItem.value = '';
}

// Adicionar item com botão
btnAdicionar.addEventListener('click', adicionarItem);

// Adicionar item com Enter
inputItem.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') adicionarItem();
});

// Inicializa contador
atualizarContador();