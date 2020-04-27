//Ve se um aluno esta aprovado e retorna sua media

var readline = require('readline-sync')

var n1 = readline.questionInt("Digite a 1 nota: ")
var n2 = readline.questionInt("Digite a 2 nota: ")
var n3 = readline.questionInt("Digite a 3 nota: ")

media = (n1 + n2 + n3) / 3

if(media >= 7){
    console.log("Aluno Aprovado c media " , media)
} else {
    console.log("Aluno Reprovado c media " , media)
}