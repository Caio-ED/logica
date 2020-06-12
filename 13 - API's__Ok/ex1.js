// Advinhe se a API retorna sim ou não 

const rs = require('readline-sync');
const axios = require('axios');

axios.get('https://yesno.wtf/api')
    .then(response => {

        var resp = rs.keyInYN('\nAdivinhe!\nVoce chuta em sim ou nao ?')
        resp == true ? resp = 'yes' : resp = 'no'

        if(resp == response.data.answer){
            console.log('Voce Acertou :)')
        } else {
            console.log('Voce errou :(')
        }
    })
    .catch(erro => console.log(erro))