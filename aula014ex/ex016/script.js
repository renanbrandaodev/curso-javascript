let bt = document.getElementById('bt')
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
bt.addEventListener("click", contar)
let res = document.getElementById('res')

function contar() {
    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('Digite um valor válido.')
    }   else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    
        if (p <= 0 ) {
            alert('Passo inválido! Considerando passo como 1.')
            p = 1
        }
        res.innerHTML = ''
        let numeros = []
        if (i <= f) {
            while (i <= f) {
                numeros.push(i)
                i += p
            }
        } else {
            while (i >= f) {
                numeros.push(i)
                i -= p
            }
        }
        res.innerHTML = numeros.join(' ->  ')
    }
}