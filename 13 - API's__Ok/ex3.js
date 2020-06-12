//Dados de um Episodio qualquer de Breaking Bad

const axios = require('axios');
const rs = require('readline-sync');

var nEpisodio = rs.questionInt("\nDigite um numero de Episodio de Breaking Bad para ver informacoes: ");

axios.get(`https://www.breakingbadapi.com/api/episodes/${nEpisodio}`)
    .then(response => {
       const{
           title,
           season,
           air_date,
           characters,
           episode
       } = response.data[0]

       console.log(`\n\Temporada: ${season} Episodio: ${episode}\nTitulo: ${title}\n`);
       console.log(`Elenco: ${characters}\n`);
       console.log(`Data de Lançamento: ${air_date}\n`);
    })
    .catch(erro => {
        return console.log(erro.data);
    })