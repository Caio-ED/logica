//verifica qual poligono e retorna sua area.

var readline = require('readline-sync')

var nlados = readline.question("Digite o numero de lados do Poligono : ")
var cont = 0
var tamanho = [undefined]
var area = 0.0

while(cont < nlados) {
    tamanho [cont] = readline.question("Digite o tamanho do " + (cont + 1 ) + " lado do Poligono : ")
    cont++
}
if(nlados == 3){
    var base = readline.question("Este poligono necessita do valor de sua base: ")
    var altura = readline.question("Este poligono necessita do valor de sua altura: ")
    area = base * altura / 2
    console.log("Triangulo \nArea: " ,area)
} else if( nlados == 4) {
    area = tamanho[0] * tamanho[1]
    console.log("Quadrado \nArea: " ,area)
} else if(nlados ==5){
    var apotema = readline.question("Este poligono necessita do valor de seu apotema: ")
    area = tamanho[0] * apotema / 2 *5
    console.log("Pentagono \nArea: " ,area)
}

