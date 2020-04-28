var rs = require('readline-sync');


for(var option = "s"; option == "s";){
    var result = 1
    var num = rs.questionInt("Calcular o fatorial de: ");
    for(; num > 0; num--){
        result = result * num
    }
    console.log(result)
    option = rs.question("Deseja calcular outro numero? (s / n) : ")   
}



