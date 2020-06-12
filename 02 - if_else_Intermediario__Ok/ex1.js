var rs = require('readline-sync')
var formato_saida = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

var preco_prod = rs.questionFloat('Digite o valor do produto que quer comprar: ');
var montante = 0;

var moedas_1real = rs.questionFloat("Quantas moedas de 1 Real: ")
montante = montante + moedas_1real

var moedas_50c = rs.questionFloat("Quantas moedas de 50 centavos: ")
montante = montante + moedas_50c / 2

var moedas_25c = rs.questionFloat("Quantas moedas de 25 centavos: ")
montante = montante + moedas_25c / 4

var moedas_10c = rs.questionFloat("Quantas moedas de 10 centavos: ")
montante = montante + moedas_10c / 10

var moedas_5c = rs.questionFloat("Quantas moedas de 5 centavos: ")
montante = montante + moedas_5c / 20

var moedas_1c = rs.questionFloat("Quantas moedas de 1 centavos: ")
montante = montante + moedas_1c / 100

if(preco_prod > montante){
    console.log('Voce não possui dinheiro suficiente: ')
} else{
    console.log("Você pode comprar o produto")
}
console.log("Você possui:", montante.toLocaleString("pt-BR", formato_saida))
console.log("Preço do Produto:", preco_prod.toLocaleString("pt-BR", formato_saida))

