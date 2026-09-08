let bt = document.getElementById('bt')
bt.addEventListener("click", gerar)

function gerar() {
    let numero = document.getElementById('num').value
    res.innerHTML = '';
    if (numero === "" || isNaN(numero)){
            alert(`Por favor digite um número.`)
    } else {
        for(let n = 1; n <= 10; n++){
        res.innerHTML += `<p>${numero} x ${n} = ${numero * n}</p>`
        res.style.display = 'block'
        }
    }
    
}