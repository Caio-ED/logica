var rs = require('readline-sync')

var limite = rs.question("Ver pares ate o numero: ")
i = 0
while(i <= limite){
    if(i % 2 == 0){
    console.log(i)
    }
    i++
}
