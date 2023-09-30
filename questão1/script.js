const button = document.getElementById("button");
const butLimpar = document.getElementById("limpar");

const gerarNumero = () => Math.floor(Math.random() * 100) + 1;

button.addEventListener("click", () => {
    let numeroAleatorio = gerarNumero();
    let li = document.createElement("li");
    let ul = document.getElementById("list");
    ul.appendChild(li);
    li.textContent = numeroAleatorio;
});

butLimpar.addEventListener("click", () => {
    let ul = document.getElementById("list");
    ul.textContent = null;
});
