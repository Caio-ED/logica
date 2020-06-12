/* Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
média no final.
Utilize o pacote : https://www.npmjs.com/package/median */


const rs = require('readline-sync');
const median = require('median')


var montante = [];
for(i = 0; i < 4; i++){
    montante.push(rs.questionInt(`Digite a sua ${(i+1)}° nota: `))
}
var media = median(montante)

console.log(`Sua media é ${media}`)
