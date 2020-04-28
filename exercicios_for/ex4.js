var rs = require('readline-sync')

    var nome = []
    var notaA = []
    var notaB = []
    var media = []

    //Loop para registrar os alunos nos arrays.
for(i=0; i< 5; i++){
     nome[i] = rs.question('Digite seu nome: ')
     notaA[i] = rs.questionFloat('Digite a 1 nota: ')
     notaB[i] = rs.questionFloat('Digite a 2 nota: ')

     media[i] = (notaA[i] * 0.3 + notaB[i] * 0.7)    
}

    //Loop para Exibir as medias dos respectivos alunos.
console.log("A seguir a media Final dos alunos: ")
for(i=0; i<5; i++) {
    console.log("\n" + nome[i])
    console.log("Nota A:", notaA[i], "  Nota B:", notaB[i])
    console.log("Media Final:" , media[i].toFixed(1)) 
}

