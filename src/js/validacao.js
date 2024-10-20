const btnEnviar = document.querySelector(".btn-enviar")

btnEnviar.addEventListener("click", validarFormulario)

function validarFormulario() {
    
    const inputs = document.querySelectorAll(".validacao")
    const avisos = document.querySelectorAll(".aviso")
    const legenda = document.querySelector(".legenda")

    inputs.forEach(function (input, index) {
        if (input.value !== "") {
            input.classList.add("aceito")
            input.classList.remove("validacao-negada")
            avisos[index].classList.remove("mostrar")
        } else {
            input.classList.remove("aceito")
            input.classList.add("validacao-negada")
            avisos[index].classList.add("mostrar")
        }
    })
}