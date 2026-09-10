let amigo = {nome: 'José',
     sexo: 'M', 
     idade: 23,
     peso: 85.5,
    aumentarIdade(i=0){
        console.log('Envelheceu')
        this.idade+= i
    }}
amigo.aumentarIdade(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg e tem ${amigo.idade} anos.`)