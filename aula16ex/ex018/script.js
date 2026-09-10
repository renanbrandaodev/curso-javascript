let num = document.getElementById('numero')
let lista = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []
let botaoAdicionar = document.getElementById('botaoAdicionar')
botaoAdicionar.addEventListener("click", adicionar)
//Vericar se o número está entre 1 e 100.
function numero (n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
//Verificar se o número está na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
//Adicionar número na lista
function adicionar(){
    if(numero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`Valor inválido ou já adicionado na lista.`)
    }
    //Apagar valor de num
    num.value = ''
    //Cursor volta a piscar para digitar num
    num.focus()
}

//Parte de finalização
let botaoFinalizar = document.getElementById('botaoFinalizar')
botaoFinalizar.addEventListener("click", finalizar)

function finalizar(){
    if (valores.length == 0){
        alert(`Adicione valores antes de finalizar.`)
    } else {
        let total = valores.length
        //Procurando maior e menor valor na lista
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            //Soma dos valores da lista
            soma += valores[pos]
            //Maior e menor valor da lista
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        //Calculando a media dos valores da lista
        media = soma / total
        //Inserindo no HTML
        res.innerHTML = ''
        res.innerHTML += `<p>No total, temos <strong>${total}</strong> valores cadastrados.`
        res.innerHTML += `<p>O maior valor cadastrado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é <strong>${media}</strong>.`

    }
      
}