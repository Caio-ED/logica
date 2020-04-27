var readline = require('readline-sync')

var qtdMaças = readline.question("Quantidade de Maças que ira comprar: ")
var preco

if(qtdMaças < 12){
    preco = qtdMaças * 0.30
    console.log(qtdMaças + " Maça(s) lhe Custara : $" + preco)
} else {
    preco = qtdMaças * 0.25
    console.log(qtdMaças + " Maça(s) lhe Custara : $" + preco + " Promoção a $0.25 Cada Maçã")
}