const original = document.querySelector('#original')
const contador = document.querySelector('#contador')
const modificado = document.querySelector('#modificado')
const efeito = document.querySelector('#efeito')
original.addEventListener("keyup", function () {
    console.log(original.value.length)
    contador.innerHTML = 0 + original.value.length

    if (efeito.value == "uppercase") {
        modificado.value = original.value.toUpperCase()
    } else {
        modificado.value = original.value.toLowerCase()
    }

})



efeito.addEventListener("change", function () {
    if (efeito.value == "uppercase") {
        modificado.value = original.value.toUpperCase()
    } else {
        modificado.value = original.value.toLowerCase()
    }
})