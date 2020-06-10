/*  Em java Script temos Alguns tipos de Loops e formas de iterar sobre os indices e valores de arrays, e propiedades de Objetos.
    Confira as estruturas e métodos muito importantes que podemos utilizar.
*/
var meu_array = [batata, cenoura, limao, laranja, goiaba]

//  While
    while(true){
        break
    }

//  Do While
    do {
        break
        continue
    } while (true)

//  For
    for(i = 0; true; i++){
        break
    }

//  ForEach()
    meu_array.forEach(element => {
        
    });

//  .Filter()
    var array_filtrado = meu_array.filter((valor, indice, array) => {
     valor == typeof ""
     // a cada flag true ele retorna o valor do array
 })

//  .Find()
    var valor_encontrado = meu_array.find((valor, indice, objeto) => {
    valor == typeof ""
    // Do mesmo modo que o filter, na primeira flag true ele retorna o valor, mas apenas a primeira, ou seja só retorna um unico.
})

//  .Reduce()
    meu_array.reduce((sum,vAtual) => sum =+ vAtual)

//  .Every()
    meu_array.every(value => typeof value == String)
    
//  .Some()
    meu_array.some((value => value == 'cenoura'))

//  .Map()
    var arrayRetornado = meu_array.map((variavel) =>  variavel * 2 )

//  For In
    for (const nomequequiser in meu_array){

    }

//  For Of
    for (const nomequequiser of meu_array){
    console.log('ola')
    }