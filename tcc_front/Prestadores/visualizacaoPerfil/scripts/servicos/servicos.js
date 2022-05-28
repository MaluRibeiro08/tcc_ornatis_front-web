"use strict"

const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/'

const getServicosPorEmpresa = async (id_empresa) =>
{
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_empresa=${id_empresa}&acao=listarServicosPorEmpresa`);

    const informacoes = await response.json();
    
    return informacoes.data;

}

const setarDisponibilidadeServico = async (id_servico) =>
{

    const data = {};
    data['acao'] = 'setarDisponibilidadeServico';
    data ['id_servico'] = id_servico;
    data ['ativo_para_uso'] = document.getElementById(`check_servico_${id_servico}`).checked ? 1 : 0;

    const options_servico = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };

    fetch(url, options_servico).then(response => response.json()).then(
        data => 
        {
            console.log("Imprimindo response")
            console.log(data)
            console.log("Especificando impressao response")
            console.log(data.data)
        }
    )
    //.then
    // (
    //     () =>
    //     {
    //         console.log("enviando formulario adm"),
                    
    //         document.getElementById("formulario_imagem").submit()
    //     }
    // ).then
    
}

export {getServicosPorEmpresa, setarDisponibilidadeServico}