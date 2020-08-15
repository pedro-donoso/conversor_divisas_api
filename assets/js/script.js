let inputs = document.querySelectorAll(".divisa_valor");
console.log(inputs);

inputs.forEach(input => {
    console.log(input.value);
    console.log(input.dataset.cambio);
})



