var readline = require('readline-sync')

var nome = readline.question("Digite o seu nome: ")
var sexo = readline.question("Digite F para feminino e M para masculino: ")
var eCivil = readline.question("Digite o seu estado Civil: ")

if(sexo == "F" && (eCivil == "Casada" || eCivil == "casada")){
    tCasamento = readline.questionInt("Quanto tempo de casado: ")
    console.log(nome , sexo, eCivil , tCasamento)
} else {
    console.log(nome , sexo, eCivil)

}
