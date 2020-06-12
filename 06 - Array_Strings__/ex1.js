var rs = require('readline-sync')

var formato_saida = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

var nome_produto = []
var preco_produto = []
var total = 0
    //Cadastro Produtos
var qtdProdutos = rs.questionInt('Quantos Produtos deseja cadastrar: ')
for(i = 0; i < qtdProdutos; i++){
    nome_produto[i] = rs.question("Digite o nome do Produto: ")
    preco_produto[i] = rs.questionFloat('Digite o preço do Produto: ')
    total = total + preco_produto[i]
}

    //Pagamento e Saida
var pagamento = rs.questionFloat('Dinheiro Para fazer o Pagamento: ')
if(pagamento < total){
    console.log('Dinheiro Insuficiente... Compra Cancelada !')
} else {
    for(i = 0; i < qtdProdutos; i++){
        console.log(`Produto: ${nome_produto[i].toLocaleString('pt-BR', formato_saida)} - preço: ${preco_produto[i].toLocaleString('pt-BR', formato_saida)} `)
    }
    console.log(`Total da Compra: ${total.toLocaleString('pt-BR', formato_saida)} \nTroco: ${(pagamento - total).toLocaleString('pt-BR', formato_saida)}`)
}