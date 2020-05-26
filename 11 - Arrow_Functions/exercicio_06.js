// Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente


var fs = require('fs')

var json = fs.readFileSync('./assets/car.json')
var cars = JSON.parse(json)

var carros = cars.sort((a, b) => a.Horsepower - b.Horsepower)

console.log(carros[0])
