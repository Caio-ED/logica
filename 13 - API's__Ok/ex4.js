//Retorna Informaçoes de um CEP

const axios = require('axios');
const rs = require('readline-sync');

var cep = rs.question('Digite o seu CEP sem pontos(.) e hifens(-): ');
axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then(response => {
        const {
            bairro,
            cidade,
            logradouro,
            estado
        } = response.data

        console.log(`\nEstado: ${estado} cidade: ${cidade}\nBairro: ${bairro}\nRua: ${logradouro}\n`)
    })
    .catch(erro => {
       console.log("Ocorreu um erro, Verifique se digitou o numero certo");
    })