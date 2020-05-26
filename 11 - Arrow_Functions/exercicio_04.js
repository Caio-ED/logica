// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.

var fs = require('fs')

var json = fs.readFileSync('./assets/car.json')
var cars = JSON.parse(json)
var result = 0

var origem = cars.filter( (carros) => carros.Origin == 'Europe' )

origem.forEach((carro) => {
       result = result + carro.Horsepower
})

var media = result / origem.length

console.log(media.toFixed(2))