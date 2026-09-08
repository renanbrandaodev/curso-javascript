function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Digite um valor válido.")
    } 
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    let c = i
    
    
    if (p <= 0) {
        alert(`Valor de passo inválido, alterando automaticando valor de passo para 1.`)
        p = 1
    }
    res.innerHTML = ``
    res.innerHTML += "Resultado:<br>"
    if (c <=f){
        for(let c = i; c <= f; c += p)
        res.innerHTML += ` ➡️${c} `
    } else {
        if (c >= f) {
            for(let c = i; c >= f; c -=p)
            res.innerHTML += ` ➡️ ${c}  `
        }
    }
    res.innerHTML += `🏁`

      
}