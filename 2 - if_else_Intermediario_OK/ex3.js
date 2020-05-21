var rs=require('readline-sync')

var ddi = rs.questionInt('Digite o DDI do Seu Pais: ')

switch (ddi) {
    case 1:
        console.log('Estados Unidos')
        break
    case 49:
        console.log('Alemanha')
        break
    case 54:
        console.log('Argentina')
        break
    case 55:
        console.log('Brasil')
        break
    case 35:
        console.log('Portugal')
        break
    default:
        console.log('Desculpe, DDI não cadastrada.')
}