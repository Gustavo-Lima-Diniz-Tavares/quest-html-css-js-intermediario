const camposFormulario = document.querySelectorAll(".campo")
const btnEnviar = document.querySelector(".btn-enviar")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    
    camposFormulario.forEach(function (input) {
        if (input.value) {
            input.classList.add("valido")
            input.classList.remove("erro")
            input.nextElementSibling.classList.remove("mostrar")
        } else {
            input.classList.remove("valido")
            input.classList.add("erro")
            input.nextElementSibling.classList.add("mostrar")
        }
    })
})