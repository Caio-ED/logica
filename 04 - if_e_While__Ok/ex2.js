n1 = 1
n2 = 50

while(n1 <= n2) {
    var ehprimo = true
    var divisor = 2

    let saida = `${n1} `
    if(n1 % 2 == 0){
        saida = saida + "Par"
    } else {
        saida = saida + 'Impar'
    }

    while(divisor < n1){
        if(n1 % divisor == 0){
            ehprimo = false    
        }
        divisor++
    }

    if(ehprimo) {
        saida = saida + ' Primo'
    }
    console.log(saida)
    n1++
}