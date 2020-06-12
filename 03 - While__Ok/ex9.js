// Imprime uma string ao contrario .

var rs = require('readline-sync');

var input = rs.question("Digite a palavra a ser imprimida ao contrario: ");
var i = input.length;
var result = "";


while(i > 0){
    result = result + input.charAt(i - 1)
    i--
}
console.log(result)