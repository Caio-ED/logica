const m = require('./calcula-media')
const rs = require('readline-sync');

numeros = []

for(i =0; i<3; i++){
   let n = rs.questionInt(`Digite o ${(i+1)}° Numero: `);
   numeros.push(n)
}

console.log(m.media(numeros))