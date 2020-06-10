var rs = require('readline-sync')

var escalaIN = ''
var escalaOUT = ''
var opcoes = 'Voce Deseja converter de:\
\n1 - Celsius para Fahrenheit \
\n2 - Celsius para Kelvin \
\n3 - Fahrenheit para Celsius \
\n4 - Kelvin para Celsius \n'

var teste = rs.questionInt(opcoes)
if(teste == 1 || teste == 2){
    escalaIN = ' Celsius: '
} else if(teste == 3) 
{escalaIN = ' Fahrenheit: '
} else if (teste == 4) {
     escalaIN = ' Kelvin:'}

var temperatura = rs.questionFloat('Digite a Temperatura em' + escalaIN)

switch (teste){
    case 1:
        temperatura = (temperatura / 5 * 9) + 32
        escalaOUT = '°F '
        break
    case 2:
        temperatura = temperatura + 273,15
        escalaOUT = '°K '
        break      
    case 3:
        temperatura = (temperatura - 32) * 5 / 9
        escalaOUT = '°C '
        break
  
    case 4:
        temperatura = temperatura - 273,15
        escalaOUT = '°C '
        break

    default:
        console.log('Nenhuma Operação Valida, Fim do Programa.')
}    

console.log(`Sua Temperatura equivale a: ${temperatura}${escalaOUT}`)
