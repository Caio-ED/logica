var rs = require('readline-sync')

var n1 = rs.question("Digite de um numero de 1 a 100: ")
var n2 = rs.question("Digite de outro numero de 1 a 100: ")

menor = Math.min(n1,n2)
maior = Math.max(n1,n2)

while(menor < maior){
    console.log(menor)
    if(menor % 5 == 0 && menor % 7 == 0){
        console.log("Ping Pong")
    } else if (menor % 5 == 0) {
        console.log('Pong')
    } else if (menor % 7 == 0){
        console.log('Pong')
    }
    menor++
}
   
