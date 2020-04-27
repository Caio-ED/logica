var readline = require('readline-sync')

var n1 = readline.question("Digite o 1 numero: ")
var n2 = readline.question("Digite o 2 numero: ")
var n3 = readline.question("Digite o 3 numero: ")

//Maior
if(n1 > n2 && n1 > n3) {
    maior = n1
    if(n2 > n3){
    medio = n2
    menor = n3
    } else {
        medio = n3
        menor = n2
    }
    console.log(menor + "  " + medio + "  " + maior)
} else if (n2 > n1 && n2 > n3) {
    maior = n2
    if(n1 > n3){
        medio = n1
        menor = n3
    } else {
        medio = n3
        menor = n1
    }
    console.log(menor + "  " + medio + "  " + maior)
} else if (n3 > n1 && n3 > n2){
    maior = n3
    if(n1 > n2){
        medio = n1
        menor = n2
    } else {
        medio = n2
        menor = n1
    }
    console.log(menor + "  " + medio + "  " + maior)
}
