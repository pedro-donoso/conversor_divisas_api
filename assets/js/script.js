let inputs = document.querySelectorAll(".divisa_valor");

let url = "https://api.exchangeratesapi.io/latest?base=USD";

//----fetch----
fetch(url)
    .then(r => r.json())
    .then(data => {
        document.querySelector("#EUR").dataset.cambio = data.rates.EUR;
        document.querySelector("#GBP").dataset.cambio = data.rates.GBP;
        document.querySelector("#JPY").dataset.cambio = data.rates.JPY;
    })
    .catch(error => console.error(error))
//----fetch----

function valorModificado(input) {
    let factor = input.value / input.dataset.cambio;

    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2);
    });
}


