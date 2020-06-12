var rs = require('readline-sync')

var senha = rs.question('Digite a senha : ')
if (senha == 'batatafrita'){
    console.log('Acesso Permitido')
} else {
    console.log('Acesso Negado')
}