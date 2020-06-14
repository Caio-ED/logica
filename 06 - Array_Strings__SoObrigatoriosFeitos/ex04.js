const rs = require('readline-sync');

var vogais = ['a','e','i','o','u','w','y']
var consoantes = 'bcdfghjklmnpqrstvwxz'.split('')

var palavra = rs.question('Digite uma palavra: ').split('');

    //usando Filter()
var nVogais = palavra.filter(letra => {
    for(let i = 0; i < vogais.length; i++){
    return letra.includes(vogais[i])
    }
})

    //De um geito mais bruto
var nConsoantes = []
for(let i = 0; i < palavra.length; i++){
    for(c = 0; c < consoantes.length; c++){
        if(palavra[i].includes(consoantes[c])){
            nConsoantes.push(palavra[i])
        }
    }
}
console.log(`qtd de Vogais: ` + nVogais.length)
console.log(`qtd de Consoantes: ` + nConsoantes.length)
