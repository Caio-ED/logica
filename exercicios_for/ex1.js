var rs = require('readline-sync');

var frase = rs.question("Digite uma frase ou palavra: ")


for (var i = 0; i < frase.length ; i++){
    if(frase.charAt(i) == "a"){ 
        var palavra = frase.split("")
        palavra[i] = frase.charAt(i).toUpperCase()
     }
}
    console.log(palavra.join(''));
