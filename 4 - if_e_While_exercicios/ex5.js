var rs = require('readline-sync')
var numeros = []
i = 0
while(numeros[i - 1] != -1) {
    numeros[i] = rs.questionInt('Digite seus numeros:')
    i++
}
numeros.pop()
console.log(`Maior numero é ${Math.max.apply(null,numeros)}\nMenor numero é ${Math.min.apply(null,numeros)}`)