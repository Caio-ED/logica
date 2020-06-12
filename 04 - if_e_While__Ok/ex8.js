var rs = require('readline-sync')

rs.question('\nPreparados para o pedra papel e tesoura?\nGanha quem vencer 3 rodadas 1°!\n\n(Tecle enter para começar)\n')

var vitorias = [0,0]
var ganhador = ''

 nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
 nomeJogador2 = rs.question('Digite o nome do jogador 2: ')

while(true){
    console.log('\n 1 - pedra  2 - papel   3 - Tesoura\n')
    var jogadaA = rs.questionInt('Sua vez ' + nomeJogador1 +', faça sua jogada: ',{hideEchoBack: true})
    console.log('\n 1 - pedra  2 - papel   3 - Tesoura\n')
    var jogadaB = rs.questionInt('Sua vez ' + nomeJogador2 +', faça sua jogada: ',{hideEchoBack: true})
    
    if ((jogadaA == 1 && jogadaB == 1) || (jogadaA == 2 && jogadaB == 2) || (jogadaA == 3 && jogadaB == 3)){
        rs.question('\n Deu empate! \nProxima Rodada (Enter)')
    } else if ((jogadaA == 1 && jogadaB == 3) || (jogadaA == 2 && jogadaB == 1) || (jogadaA == 3 && jogadaB == 2)){
        console.log('\n' + nomeJogador1 + ' Venceu esta rodada!')
        vitorias[0]++
        if(vitorias[0] == 3){
            ganhador = nomeJogador1
            break
        }
    } else if((jogadaB == 1 && jogadaA == 3) || (jogadaB == 2 && jogadaA == 1) || (jogadaB == 3 && jogadaA == 2)){
        console.log('\n'+ nomeJogador2 + ' Venceu esta rodada!')
        vitorias[1]++
        if(vitorias[1] == 3){
            ganhador = nomeJogador2
            break
        }
    }
    rs.question('Proxima Rodada (Enter)')
}
console.log(`Parabens ${ganhador} voce é o ganhador !!`)
