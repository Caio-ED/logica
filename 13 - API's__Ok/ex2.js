//Imprimir uma Frase Aleatoria de Breaking Bad

const axios = require('axios');
const rs = require('readline-sync')

rs.question("\nPara Imprimir uma Frase Aleatorio de Breaking Bad! \n(Tecle Enter)...\n");

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(response => {
    frase = response.data[0].quote
    autor = response.data[0].author
    console.log(`${frase}\n- ${autor}`)
})
.catch(erro => {
    console.log(erro.data)
})