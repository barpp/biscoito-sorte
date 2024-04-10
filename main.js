//Variáveis
const btnTry = document.querySelector("#fortune-cookie")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", toggleScreen)
document.addEventListener("keypress", enterTryClick)

// função callBack
function enterTryClick(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide') || screen2.classList.contains('hide')) {
        toggleScreen()
    } else {
        handleTryClick()
    }
}

function handleTryClick(event) {
    event.preventDefault()  //não faça o padrão
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
