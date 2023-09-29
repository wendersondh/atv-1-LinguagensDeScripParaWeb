let inputCelsius = document.querySelector("#celsius");
let tempFahrenheit = document.querySelector("#tempFahrenheit");
let tempKelvin = document.querySelector("#tempKelvin");
let erro = document.querySelector("#erro");


const converterFahrenheit = tempCelsius =>  tempCelsius * 1.8 + 32;

const converterKelvin = tempCelsius =>  tempCelsius + 273.15;

inputCelsius.addEventListener( "keyup" , () => {
    let tempCelsius = parseInt(inputCelsius.value);
    if(isNaN(tempCelsius)) {
        tempFahrenheit.textContent = "-";
        tempKelvin.textContent = "-";
        erro.textContent = "digite um numero";
    }
    else {
        tempFahrenheit.textContent = `Temperatura em Fahrenheit: ${converterFahrenheit(tempCelsius)} °F`;
        tempKelvin.textContent = `Temperatura em Kelvin: ${converterKelvin(tempCelsius)} °K`;
        erro.textContent = null;
    }
})