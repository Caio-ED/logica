//Pergutnar se quer continuar ou sair do programa, e se quer ou nao somar dois numeros


var rs = require('readline-sync')

//Sai do programa
while(option != "A" && option != "a"){
    var option = rs.question("Insira A para sair \nInsira B para Somar \n")
    
    //Caso digite algo errado
    if (option != "A" && option != "B" && option != "a" && option != "b") {
        console.log("\nNão entendi o comando \n")
    }

    //soma se apertar B
    if(option == "B" || option == "b"){
            var n1 = rs.questionInt("Digite o 1 numero: ")
            var n2 = rs.questionInt("Digite o 2 numero: ")
            var result = n1 + n2
            console.log(result)
        option = ""
    }
    
}