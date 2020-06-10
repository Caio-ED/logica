// multiplcar 2 numeros sem usar o operador *

var rs = require('readline-sync');

var n1 = rs.questionInt("Digite o 1 numero a ser multiplicado: ")
var n2 = rs.questionInt("Por quanto deseja multiplicar: ")
var i = 0
var result = 0

while (i < n2) {
    result = result + n1 
    i++
}
console.log(result)
