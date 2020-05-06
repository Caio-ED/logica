var rs = require('readline-sync')

var nomes = new Array()
var pacote_numeros = []
var escolhas_iguais = new Array()

var njogadores = rs.question('Quantos Jogadores vão Jogar: ')

    //Registra os 5 numeros de cada jogador.
for(i = 0; i < njogadores; i++){

    nomes[i]  = rs.question(`Digite o nome do ${i + 1} Jogador: `)
    var numeros = []

    for(j = 0; j < 5; j++){
        numeros[j] = rs.questionInt('Digite um numero de 1 a 10: ')
    }
    pacote_numeros[i] = numeros
}

    //Verifica quais numeros são iguais
for (i = 0; i < (njogadores - 1); i++){
    var ires = 0
    for(j = 0; j < 5; j++){
        for(k = 0; k < 5; k++){
            if(pacote_numeros[i][j] == pacote_numeros[(i + 1)][k]){
                escolhas_iguais[ires] = pacote_numeros[(i + 1)][k]
                ires++
            }
        }
    }
}
console.log(`Pelo menos 2 jogadores escolheram: ${escolhas_iguais.join(', ')}`)