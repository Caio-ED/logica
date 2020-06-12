//Trazer o resultado de uma equação Link do Rep no GitHub: https://github.com/aunyks/newton-api

const axios = require('axios');
const rs = require('readline-sync');


console.log('Operadores: * vezes, (over) dividir, + mais, - menos, ^ elevado')
var equacao = rs.question('Faca uma Equacao: ')

axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then(response => {
        console.log('Resultado:', response.data.result)
    })