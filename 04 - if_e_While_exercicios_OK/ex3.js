var rs = require('readline-sync')

var n = -1
while(n < 0){
     n = rs.questionInt('Digite um numero ( > que 0 ) de linhas para a escada de *: ')
}



degrau = ''

while(n > 0) {
    degrau = degrau + '*'
    console.log(degrau)
    n--
}