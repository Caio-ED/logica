/* Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator */

const {AgeFromDateString} = require('age-calculator');
const rs = require('readline-sync');

var data_string = rs.question('Digite sua data de Nascimento no Formato AAAA/MM/DD: ');

var idade = new AgeFromDateString(data_string).age;

console.log(`Você Possui ${idade} ano(s) de idade`);