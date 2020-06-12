console.log("Olá Mundo")
console.info("O mundo é redondo")
console.warn("Cuidado c o fim do Mundo")
console.error("O mundo parou")
console.debug("O mundo ta girando ainda")

// chamando biblioteca de entrada para o js
var readline = require('readline-sync')

var estado_atual = readline.question("Como esta o Mundo Hoje ?")
console.log(estado_atual)