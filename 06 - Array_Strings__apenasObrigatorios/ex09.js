const rs = require('readline-sync');

var frase = rs.question('Digite uma frase: ')

if(frase.includes('bosta')){
   var novafrase = frase.replace("bosta","estrume")
    console.log(novafrase)
}

