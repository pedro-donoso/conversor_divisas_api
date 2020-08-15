let inputs = document.querySelectorAll(".divisa_valor");
console.log(inputs);

inputs.forEach(input => {
    input.value = input.dataset.cambio;
});

function valorModificado(input) {
    console.log(input.value);
}


