let inputs = document.querySelectorAll(".divisa_valor");

let url = "https://api.exchangeratesapi.io/latest?base=USD";

fetch(url)
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data.rates);
    })
    .catch(function (error) {
        console.error(error);
    })


function valorModificado(input) {
    let factor = input.value / input.dataset.cambio;

    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2);
    });



}


