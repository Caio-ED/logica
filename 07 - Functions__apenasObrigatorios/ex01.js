const rs = require('readline-sync');

function calculaVolume(raio){
    let volume = 4/3 * Math.PI * raio ^ 3
    return volume
}

var raio = rs.questionFloat("Digite o Raio da Esfera: ");

console.log(`O Volume da Esfera é de ${calculaVolume(raio)}`)