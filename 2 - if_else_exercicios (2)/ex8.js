var rs = require('readline-sync')

var Texto = rs.question('Digite a palavra a ser verificada: ')

if(Texto[0] == Texto[0].toUpperCase()){
    console.log("A primeira letra é maiuscula")
} else{
    console.log("A primeira letra é minuscula")
}

 