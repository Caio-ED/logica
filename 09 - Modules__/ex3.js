/* Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd */

const rs = require('readline-sync');
const isOdd = require('is-odd');

var n = rs.questionInt('Digite um numero Inteiro: ');

if(isOdd(n)) {
    console.log('Seu numero é Impar')
} else {
    console.log('Seu numero é par')
}
