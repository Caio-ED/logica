const rs = require('readline-sync');
const m = require('./calcula-media')

class Aluno {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        console.log('Aluno Criado');
    }
}

    //Cadastra os alunos
var alunos = []
for(i = 0; i < 3; i++){
    console.log('Cadastre o', (i+1),"° Aluno.");
    let nome = rs.question('Nome: ');
    let idade = rs.questionInt('Idade: ');
    alunos[i] = new Aluno(nome, idade)
}

    //Descobre a maior idade
var maior_idade = 0
for(const aluno of alunos){
    if(aluno.idade > maior_idade){
        maior_idade = aluno.idade
    }
}

    //Filtra os alunos que tiverem a maior idade
var mais_velhos = alunos.filter( aluno => {
    return aluno.idade == maior_idade
})
console.log(`Os Alunos mais Velhos são:`)
mais_velhos.forEach( aluno => console.log(`nome: ${aluno.nome} - idade: ${aluno.idade}`));

media_de_idade = m.mediaIdadeAlunos(alunos)
console.log(`A media de idade dos alunos é iguala ${media_de_idade}`)