let num = [0, 2, 1, 3]
num [4] = 4
num.push(5)
num.sort()
console.log(num)
console.log(num.length)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}