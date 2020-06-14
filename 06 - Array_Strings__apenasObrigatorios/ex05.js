const rs = require('readline-sync');

var nome = rs.question('Qual é o seu nome? ')

console.log(`A 3° Letra do seu nome é: ${nome.charAt(2)}`)