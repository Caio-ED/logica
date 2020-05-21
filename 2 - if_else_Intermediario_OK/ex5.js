var rs = require('readline-sync')
var formato_Dinheiro = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

const desconto = 0.1

var consumo = rs.question('Quantos KW sua Residencia consumiu esse Mês: ')
var salarioMinimoAtual = 1045
var preco1KW = salarioMinimoAtual/7/100

var valorSemDesc = consumo * preco1KW
var valorComDesc = valorSemDesc - (valorSemDesc * desconto)

console.log(`Consumo desse Mês: ${consumo} Kilowatts 
\nPreço da unidade do KW: ${preco1KW.toLocaleString('pt-BR', formato_Dinheiro)}\
\nValor sem Desconto: ${valorSemDesc.toLocaleString('pt-BR', formato_Dinheiro)}\
\nValor Final com Desconto: ${valorComDesc.toLocaleString('pt-BR', formato_Dinheiro)}`)