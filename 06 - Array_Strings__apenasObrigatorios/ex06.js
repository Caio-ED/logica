const rs = require('readline-sync');
console.log('Se a palavra terminar com "al" ela aparecerá.')
var palavra = rs.question('Digite uma Palavra: ')

if(palavra.endsWith('al')){
    console.log(palavra)
} else { 
    console.log('Palavra não Identificada !')
}