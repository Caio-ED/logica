// Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1.

var fs = require('fs')
var rs = require('readline-sync')

var json = fs.readFileSync('./assets/car.json')
var cars = JSON.parse(json)

var opcao = rs.question("Insira A ou B: ").toUpperCase()

if (opcao == 'A') {
    var carros = cars.sort((a, b) => a.Acceleration - b.Acceleration)
    var maior = carros[carros.length - 1]
    var todosOsMaiores = carros.filter( (carro) => carro.Acceleration == maior.Acceleration)
    console.log(todosOsMaiores)
}else if (opcao == 'B'){
    var carros = cars.sort((a, b) => a.Horsepower - b.Horsepower)
    var maior = carros[carros.length - 1]
    var todosOsMaiores = carros.filter( (carro) => carro.Horsepower == maior.Horsepower)
    console.log(todosOsMaiores)
}else {
    console.log('ERROR, REINICIE O PROGRAMA')
}