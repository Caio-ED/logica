/* Faça um algoritmo que receba um número e diga se ele é primo ou não
Utilize o pacote : https://www.npmjs.com/package/prime-number */

const rs = require('readline-sync');
const isPrime = require('prime-number');

var n = rs.question("Digite um numero: ");

if(isPrime(n)){
    console.log("Seu numero é Primo.");
} else {
    console.log("Seu numero não é Primo");
}