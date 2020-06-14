function separaTexto(){
    var texto = document.querySelector('input').value
    texto = texto.split(' ')

    var tabela = document.querySelector('ul')

    for(i=0; i < texto.length; i++){
        var linha = document.createElement('li')
        linha.innerText = texto[i]
        tabela.append(linha)
    }
}