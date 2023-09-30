
const calcularPotencia = (base, expoente) => Math.pow(base, expoente);

const button = document.getElementById("Calcular")
button.addEventListener('click', () => {
    const base = document.getElementById("base").value
    const expoente = document.getElementById("expoente").value
    let result = calcularPotencia(base, expoente);
    let p = document.getElementById("valor")
    p.textContent = `resultado: ${result}`
});
