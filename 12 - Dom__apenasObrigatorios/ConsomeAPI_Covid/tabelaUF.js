function ConsultaCasos_UFs() {
    //Criando Tabela de UFs Pelo Javascript 
    var principal = document.querySelector('#principal')
    var table = document.createElement('table')

    var thead = document.createElement('thead')
    var trCabecalho = document.createElement('tr')

    var thEstado = document.createElement('th')
    thEstado.innerText = "Nome do Estado:"
    var thCasos = document.createElement('th')
    thCasos.innerText = "N° de Casos:"
    var thObitos = document.createElement('th')
    thObitos.innerText = "N° de Obitos:"

    trCabecalho.append(thEstado, thCasos, thObitos);
    thead.append(trCabecalho);
    table.append(thead);
    principal.append(table);
    var linha = document.createElement('hr')
    principal.append(linha)

    var tbody = document.createElement('tbody')
    table.append(tbody);

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
        .then(resposta => {
            var array_ufs = resposta.data.data

            array_ufs.forEach(dados_uf => {
                var trUf = document.createElement('tr')
                var tdEstado = document.createElement('td')
                tdEstado.innerText = dados_uf.state
                var tdCasos = document.createElement('td')
                tdCasos.innerText = dados_uf.cases
                var tdObitos = document.createElement('td')
                tdObitos.innerText = dados_uf.deaths

                trUf.append(tdEstado, tdCasos, tdObitos);
                tbody.append(trUf)
            })
        })
}
ConsultaCasos_UFs()

function ConsultaCasos_Paises(){
    var principal = document.querySelector('#principal');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.append(thead, tbody);
    principal.append(table);

    var trCabecalho = document.createElement('tr');
    var thPais = document.createElement('th');
        thPais.innerText = 'Nome do Pais';
    var thCasos = document.createElement('th');
        thCasos.innerText = 'N° de Casos';
    var thObitos = document.createElement('th');
        thObitos.innerText = 'N° de Mortes';
    
    trCabecalho.append(thPais, thCasos, thObitos);
    thead.append(trCabecalho)

    axios.get('https://covid19-brazil-api.now.sh/api/report/v1/countries')
    .then(resposta => {
        var array_Paises = resposta.data.data;
        
        array_Paises.forEach(info_Pais => {
            var trPais = document.createElement('tr');

            var tdPais = document.createElement('td')  
                tdPais.innerText = info_Pais.country
            var tdCasos = document.createElement('td')
                tdCasos.innerText = info_Pais.cases
            var tdObitos = document.createElement('td')
                tdObitos.innerText = info_Pais.deaths
            
            trPais.append(tdPais, tdCasos, tdObitos)
            tbody.append(trPais)
        })
    })
}
ConsultaCasos_Paises()
