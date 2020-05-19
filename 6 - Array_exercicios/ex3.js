var rs = require('readline-sync');

var nomes = new Array("A","B");
var numerosA = new Array();
var numerosB = new Array();

var numDiferentes = new Array();

for(i = 0; i < nomes.length; i++) {
    nomes[i] = rs.question('Digite o seu nome: ');
    for(n = 0; n < 5; n++){
        if(i == 0){
            numerosA[n] = rs.questionInt("Digite o " + (n + 1) + " numero: ");
        } else {
            numerosB[n] = rs.questionInt("Digite o " + (n + 1) + " numero: ");
        }
    }
}

var dif = 0;
for(i = 0; i < 5; i++){

    if(numerosB.includes(numerosA[i]) == false){
        numDiferentes[dif] = numerosA[i]
        dif++ 
    }   
}
console.log(`Os numeros que ${nomes[0]} escolheu diferente de ${nomes[1]} são: ${numDiferentes} `)