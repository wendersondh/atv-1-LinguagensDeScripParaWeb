const button = document.querySelector("#button");
let lista = document.querySelector("#lista");

const numAleatorio = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

button.addEventListener("click" , () => {
    let qtd1 = 0, qtd2 = 0, qtd3 = 0, qtd4 = 0, qtd5 = 0, qtd6 = 0;
    for(let i = 0; i<= 1000000; i++){
        switch(numAleatorio()) {
            case 1:
                qtd1++;
                break;
            case 2:
                qtd2++;
                break;
            case 3:
                qtd3++;
                break;
            case 4:
                qtd4++;
                break;
            case 5:
                qtd5++;
                break;
            case 6:
                qtd6++;
                break;
        }
    }
    
    lista.innerHTML = `
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd1} </li>
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd2} </li>
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd3} </li>
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd4} </li>
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd5} </li>
        <li>Quantidade de vezes que o Nº 1 apareceu: ${qtd6} </li>
    `
});