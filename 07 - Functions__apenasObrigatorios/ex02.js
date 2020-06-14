const rs = require('readline-sync');
const { func } = require('@hapi/joi');

function veSeEprimoEPositivo(num){
    var ehPrimo = true;

    if(num > 0){
        console.log('numero Positivo')
       let divisores = (num - 1)
        while(divisores >= 2){
            if(num % divisores == 0){
               return ehPrimo = false;
            }
            divisores--
        }
    } else {
        console.log('numero negativo')
        return ehPrimo = false;
    }
    return ehPrimo;
}

var num = rs.questionInt("Digite um numero para ver Se é Primo: ")

console.log(veSeEprimoEPositivo(num))