const rs = require('readline-sync');


class Carro {
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}


var garagem = new Array()
for(i=0; i < 2; i++){
let marca = rs.question('Marca do Carro: ');
let modelo = rs.question('Modelo do Carro: ')
let Ano = rs.questionInt('Ano do Carro: ')
let cor = rs.question('cor do Carro: ')

garagem[i] = new Carro(marca, modelo, Ano, cor);
}

console.log(garagem);


    // Achei interessante esse modo que o max fez na aula, ao modo tabela verdade;
marca = garagem[0].marca === garagem[1].marca;
modelo = garagem[0].modelo === garagem[1].modelo;
carrosiguais = marca && modelo
console.log(carrosiguais);

    // Mas convenhamos que com o if é bem melhor, fiz do jeito acima so por curiosidade;
if(garagem[0].marca === garagem[1].marca && garagem[0].modelo === garagem[1].modelo){
    console.log('Os Carros São Iguais');
} else { console.log('Carros Diferentes')}

console.log(typeof(garagem), typeof(Carro), typeof(garagem[1]))
