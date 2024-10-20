const inputs = document.querySelectorAll(".validacao")

console.log(inputs)

inputs.forEach(function (input) {
    input.addEventListener("change", mostrarAviso);
    function mostrarAviso() {
        if (input.value !== "") {
            input.classList.add("aceito");
        } else {
            input.classList.remove("aceito");
        }
    }
})