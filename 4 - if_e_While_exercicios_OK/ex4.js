
var soma = 0

for(i = 0; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log(i +' é multplo dos de 3 e 5')
        soma = soma + i
    }
}
console.log(soma)