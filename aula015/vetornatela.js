let valores = [ 8, 10, 4, 30, 2]
valores.sort((a,b) => a - b)
console.log(valores)

/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    //console.log(valores[pos])
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)

}