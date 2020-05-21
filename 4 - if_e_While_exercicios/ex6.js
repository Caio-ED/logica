var rs = require('readline-sync')
var nomes = []
var idades = []
var i=0

while(true){
    nomes[i] = rs.question(`Digite o nome da ${(i + 1)}° pessoa: `).split('')
    nomes[i][0] = nomes[i][0].toUpperCase()
    nomes[i] = nomes[i].join('')

    if(nomes[i] == 'Fim'){ break }

    idades[i] = rs.questionInt(`Digite a idade do(a) ${nomes[i]}: `)
    i++
}
nomes.pop()

console.log('N° de Pessoas Cadastradas: ' + idades.length)
for(i = 0; i < idades.length; i++){
    console.log(`Nome: ${nomes[i]} Idade: ${idades[i]}`)
}
