var rs = require('readline-sync')

var contInicial = rs.questionInt("Digite de onde deve começar o contador: ")
var contFinal = rs.questionInt("Digite onde deve parar o contador: ")

for(;contInicial <= contFinal; contInicial++){
    console.log(contInicial);
}
