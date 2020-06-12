/*Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc */

const rs = require('readline-sync');
const FasamImc = require('fasam-imc-calc');

var peso = rs.questionFloat('Digite o seu peso: ');
var altura = rs.questionFloat('Digite a sua altura: ');

const imc = new FasamImc(peso,altura);
console.log('Seu IMC é igual a', imc.calc())