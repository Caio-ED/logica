
var rs = require('readline-sync');
var i = 0;
var menor = 0;
while(i < 8){
    var input = rs.questionInt("Digite a " + (i + 1) +" idade: ");
    if(i == 0 || input < menor){
        menor = input;
    }
    i++    
}
console.log("A menor idade é ", menor)
