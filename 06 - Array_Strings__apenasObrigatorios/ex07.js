const rs = require('readline-sync');

var palavra = rs.question('Digite uma palavra: ')

if(palavra.includes('np') || palavra.includes('nb')){
    console.log(palavra + ' esta escrita Errada! Trocar o n por M antes de P ou B')
} else {
    console.log('Correta! Palavra não infringe a regra do P e B')
}
