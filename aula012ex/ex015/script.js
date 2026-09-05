function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById('anoN')
    let res = document.getElementById('res')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert(`Verifique os dados e tente novamente!`)
    } else {
        let sex = document.getElementsByName('opcao')
        let idade = anoAtual - Number(anoNasc.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'meninocrianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemrapaz.png')
            } else if (idade <= 45){
                //Adulto
                img.setAttribute('src','homem.png')
            } else if (idade <= 65){
                //Maduro
                img.setAttribute('srcs', 'homemmaduro.png')
            } else  {
                //Idoso
                img.setAttribute('src', 'homemsenhor.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 14) {
                //Criança
            } else if (idade < 21){
                //Jovem
            } else if (idade >= 21 && idade <= 65){
                //Adulto
            } else if (idade <= 65){
                //Maduro
            } else if (idade > 65){
                //Idoso
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    
        

