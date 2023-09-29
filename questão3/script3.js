const button = document.getElementById("button");

const calcularMelhorCombustivel = (gasolina, alcool) => {
    let valor = alcool / gasolina;
    return valor < 0.7 ? 1 : 0;
}

button.addEventListener("click" , () =>{
    let gasolina = document.getElementById("gasolina").value
    let alcool = document.getElementById("alcool").value
    let result = calcularMelhorCombustivel(gasolina, alcool);
    let resposta = document.getElementById("resposta")
    if(result == 0){
        resposta.innerHTML = `gasolina`
    }
    else{
        resposta.innerHTML = `Álcool`
    }
})

