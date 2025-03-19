//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let amigo = document.getElementById("amigo");
let res = document.getElementById("msg");
let botao = document.getElementById("botaoadd");

botao.addEventListener("click", adicionarAmigo);

function adicionarAmigo() {
    res.innerHTML = " "
    let nomeDigitado = amigo.value; 
    if (nomeDigitado == "") {
        res.innerHTML = "Por favor, digite um nome";
        return;
    } else {
        nomes.push(nomeDigitado); 
        res.innerHTML = `Amigos adicionados ${nomes}`;
        return;
    }
    
}
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < nomes.length; i++) {
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = nomes[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona à lista
    }
}
function sortearAmigo() {
    if (nomes.length === 0) {
        resultado.innerHTML = "A lista está vazia! Adicione amigos antes de sortear.";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceSorteado];

    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉`;
}
