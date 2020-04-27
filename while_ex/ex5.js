//fazer o calculo de potenciação

var rs = require('readline-sync')

var base = rs.questionInt("Digite a base: ")
var potencia = rs.questionInt("Digite a potencia: ")

result = 1

while(potencia > 0){
    result = result * base
    potencia--
}
console.log(result)

