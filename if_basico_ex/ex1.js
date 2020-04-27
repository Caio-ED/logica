// Ve se o usuario pode votar.

var readline = require('readline-sync')

var anonasc = readline.question("qual o ano de seu nacimento ?")
var anoatual = readline.question("qual o ano atual ?")

idade = anoatual - anonasc

if(idade < 16){
    console.log("voce não pode votar")
} else if(idade < 18){
    console.log("voce pode votar mas nao é obrigatorio")
} else if(idade < 65){
    console.log("voce é obrigado a votar")
} else {
    console.log("Voce não é mais obrigado a votar")
}

