//retorna peso ideal

var readline = require('readline-sync')

var altura = readline.questionFloat("Digite sua altura (0.00) : ")
var sexo = readline.questionInt("Digite 1 Para Homem ou 2 Para Mulher: ")
var pesoi

if(sexo == 1){
    pesoi = (72.7 * altura) - 58
} else {
    pesoi = (62.1 * altura) - 44.7
}
console.log("O peso ideal para voce seria : " , pesoi , " Kg")
