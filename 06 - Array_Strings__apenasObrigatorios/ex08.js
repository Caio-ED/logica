const rs = require('readline-sync');

var palavra = rs.question('Digite uma palavra: ')
var vogais = ['a','e','i','o','u','w','y']

nvogais = 0
    //No desafio não pode se usar includes, e tem que usar o indexOf
for(i = 0; i < vogais.length; i++){
    if(palavra.indexOf(vogais[i]) >= 0){
        nvogais++
    }
}

if(nvogais > 0){
    console.log('Esta Palavra Possui Vogais!')
}  else {
    console.log('Esta Palavra NAO possui Vogais!')
}