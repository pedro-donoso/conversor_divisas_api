let inputs = document.querySelectorAll(".divisa_valor");

let url = "https://api.exchangeratesapi.io/latest?base=USD";

/* fetch 

fetch(url)
    .then(r => r.json())
    .then(data => console.log(data.rates))
    .catch(error => console.error(error))

    fetch */

function valorModificado(input) {
    let factor = input.value / input.dataset.cambio;

    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2);
    });
}


