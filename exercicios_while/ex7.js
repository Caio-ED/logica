//Pergutnar se quer continuar ou sair do programa, e se quer ou nao somar dois numeros


var rs = require('readline-sync')

//Sai do programa
while(sair != "A"){
    var sair = rs.question("Insira A para sair \nInsira B para Somar \n")
    
    //Caso digite algo errado
    if (sair != "A" && sair != "B") {
        console.log("\nNão entendi o comando \n")
    }

    //soma se apertar B
    if(sair == "B"){
        while(calc != 0){
            var n1 = rs.questionInt("Digite o 1 numero: ")
            var n2 = rs.questionInt("Digite o 2 numero: ")
            var result = n1 + n2
            console.log(result)
            var calc = rs.question("Insira 0 para sair \n Qualquer outra tecla para continuar: ")
        }
        sair = ""
    }
    
}