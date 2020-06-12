var rs = require('readline-sync');
var fs = require('fs')

var garagem = fs.readFileSync('./garagem.json')
    garagem = JSON.parse(garagem)

var option = rs.questionInt('\n========= Menu ============\n(1) - Guardar Carro novo na Garagem\n(2) - Ver sua Garagem ')    

switch (option){
    case 1:
        SalvaCarro(garagem)
        break
    case 2:
        VerGaragem(garagem)
        break
    default: 
        console.log('Nenhuma das opções Fim do Programa')
}

function SalvaCarro(garagem){
    var carro = {}
    do {
        carro.marca = rs.question("Qual a marca do Carro? ")
        carro.modelo = rs.question("Qual a modelo do Carro? ")
        carro.cor = rs.question("Qual a cor do Carro? ")
        console.log(carro)
    
            //Salva Carro
        do{
            var salvar = rs.question('Deseja Guardar esse Carro na Garagem?  (s/n)').toLowerCase();
            if (salvar == 's') {
                garagem.push(carro)
                var garagem_serializada = JSON.stringify(garagem)
                fs.writeFileSync('./garagem.json',garagem_serializada)
                console.log('Carro Salvo !')
                break
    
            } else if (salvar == 'n'){ break }
            console.log('Desculpe não entendi..')
        } while (true)
    
        do{
            var continua = rs.question('Deseja Cadastrar outro Carro? (s/n)').toLowerCase();
            if( continua == 's' || continua == 'n'){ break}
            console.log('Desculpa não entendi...')
        } while (true)
        
    } while (continua == 's')
}  

function VerGaragem(garagem){
    console.log('======== Garagem ===========')
    garagem.forEach((carro,n) => {
        console.log(`---- Carro ${(n + 1)}: -------------\
                    \nMarca: ${carro.marca} Modelo: ${carro.modelo} Cor: ${carro.cor}`)
    });
}


