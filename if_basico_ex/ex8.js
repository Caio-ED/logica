//Verifica tipo de triangulo de acordo c o lado

var rs = require('readline-sync')

var lado1 = rs.questionFloat("Qual o valor do 1 lado: ") 
var lado2 = rs.questionFloat("Qual o valor do 2 lado: ")  
var lado3 = rs.questionFloat("Qual o valor do 3 lado: ")

if (lado1 == lado2 && lado2 == lado3){
    console.log("Este triandulo é equilatero.")
} else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    console.log("Este triandulo é isosceles.")
}else if(lado1 != lado2 && lado2 != lado3){
    console.log("Este triandulo é escaleno.")
}