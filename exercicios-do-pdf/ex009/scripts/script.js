let bt1 = document.getElementById('bt1')
let btzerar = document.getElementById('btzerar')
let contador = 0
let res = document.querySelector('p')

bt1.addEventListener("click", contar)
function contar() {
    contador ++
    res.innerHTML = (`O contador de cliques está com <mark>${contador}</mark> cliques.`)
}
btzerar.addEventListener("click", zerar)
function zerar() {
    contador = 0
    res.innerHTML = null
}