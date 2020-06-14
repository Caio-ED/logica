
media = function (array) {
    let soma = 0
    for (i = 0; i < array.length; i++) {
        soma += array[i]
    }

    vmedia = soma / array.length
    return vmedia
}

mediaIdadeAlunos = function (array) {
    let soma = 0
    for(const aluno of array){
        soma += aluno.idade
    }
    return soma / array.length
}

exports.media = media
exports.mediaIdadeAlunos = mediaIdadeAlunos