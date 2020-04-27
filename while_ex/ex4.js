//ver numeros pares de 0 á um numero .

var rs = require('readline-sync')

var limite = rs.question("Ver pares ate o numero: ")
i = 0
while(i != limite){
    if(i % 2 == 0){
    console.log(i)
    }
    if(limite < 0){
        i--
    }else {
        i++
    }
}
