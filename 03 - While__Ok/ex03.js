// imprimir numeros impares de 0 a 100

var rs = require('readline-sync')
i = 0
while(i < 100){
    if(i % 2 != 0 ){
        console.log(i)
    }    
    i++
}