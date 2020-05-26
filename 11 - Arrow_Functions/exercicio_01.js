// Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json

var rs = require('readline-sync')
var fs = require('fs')

var json = fs.readFileSync('./assets/car.json')
var cars = JSON.parse(json)

var potencia = rs.questionInt('Insira uma potência minima: ')

var carrosComPotencia = cars.filter( (carro) => carro.Horsepower > potencia )

console.log(carrosComPotencia.length)







