var rs = require('readline-sync')

var angulo1 = rs.questionInt("Qual o valor do 1 angulo: ") 
var angulo2 = rs.questionInt("Qual o valor do 2 angulo: ")  
var angulo3 = rs.questionInt("Qual o valor do 3 angulo: ")

if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log("Este é um triangulo retangulo")

} else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log("Este é um triangulo obtuso")

} else if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    console.log("Este é um triangulo acutangulo")
    
} else if( angulo3 + angulo2 + angulo1 < 180 || angulo3 + angulo2 + angulo1 > 180){
    console.log("Isto não é um triangulo")
}