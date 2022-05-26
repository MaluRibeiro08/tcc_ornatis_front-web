"use strict"

import { imagemPreview } from "../../../utils/imagem.js";
import { getEspecialidades, getParteCorpoPorEspecialidade, getPartesCorpo } from "./servico_cia.js";
import { listarFuncionarios } from "./funcionarios.js";

const id_empresa = 2;
let arr_especialidades_partes_corpo = {};
const url_imagem_funcionario = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/'



const construirSelect = (id_elemento_select, opcoes, assunto) =>
{
    const select = document.getElementById(id_elemento_select);

    if (assunto == "especialidades") 
    {
        opcoes.map((elemento)=>
        {

            const novaOpcao = document.createElement("option")

            novaOpcao.value = elemento.id_especialidade

            novaOpcao.innerText = elemento.nome_especialidade
            select.appendChild(novaOpcao)
        })
    }
    if (assunto == "partes_corpo") 
    {
        let contador = 0;

        while (contador < Object.keys(opcoes).length) 
        {
           const info_parte_corpo = opcoes[`${contador}`];

           const novaOpcao = document.createElement("option");

           novaOpcao.value = info_parte_corpo.id_parte_corpo;
           novaOpcao.id = "option_parte_corpo" + info_parte_corpo.id_parte_corpo;
           novaOpcao.classList.add("options_partes_corpos");
           novaOpcao.disabled = true;

           novaOpcao.innerText = info_parte_corpo.nome_parte_corpo;
           select.appendChild(novaOpcao);

           contador = contador+1;
        }
    }
    
}


const criar_card_funcionario = (elemento) =>
{
    const container_mae = document.querySelector("#container_funcionarios")
    const novoCard = document.createElement("div")

    novoCard.classList.add("card_funcionario")

    novoCard.innerHTML = 
    `
        <div class="container_img_funcionario">
            <img src="${url_imagem_funcionario}${elemento["foto_perfil"]}" alt="Foto Funcionario">
        </div>
        <div class="container_nome_funcionario">
            <p>${elemento["nome_funcionario"]}</p>
        </div>
    `
    container_mae.appendChild(novoCard)
    console.log(novoCard)
    // console.log(elemento)
}

const criarListaFuncionarios = async (id_empresa) =>
{
    const dados = await listarFuncionarios(id_empresa);

    dados.data.map((elemento) =>
    {
        criar_card_funcionario(elemento)
    })    
}


const definirSelecaoFuncionario = (alvo) =>
{
    if(alvo.classList.contains("funcionario_selecionado"))
    {
        alvo.classList.remove("funcionario_selecionado")
    }
    else
    {
        alvo.classList.add("funcionario_selecionado")

    }
}
const construirTelaCadastro = async(id_empresa) =>
{
    //ESPECIALIDADES E PARTES DO CORPO
        const arr_especialidades =  await getEspecialidades();
        construirSelect("select_especialidade", arr_especialidades, "especialidades")


        arr_especialidades.map(async (elemento) =>
        {
            const partes_corpo = await getParteCorpoPorEspecialidade(id_empresa, elemento.id_especialidade);
            const id_especialidade = elemento.id_especialidade;

            arr_especialidades_partes_corpo[`${id_especialidade}`] = partes_corpo;

        })


        const partes_corpo = await getPartesCorpo();
        construirSelect("select_parte_corpo", partes_corpo, "partes_corpo")

    // FUNCIONARIOS
        await criarListaFuncionarios(id_empresa);

        const elementos = document.getElementsByClassName("card_funcionario")
        const arr_cards = [...elementos]

        console.log(arr_cards);
        arr_cards.map((card) =>
        {
            card.addEventListener("click",
                (evento) => 
                {
                    if(evento.target.classList.contains("card_funcionario"))
                    {
                        definirSelecaoFuncionario(evento.target)
                    }
                    else if(evento.target.classList.contains("container_img_funcionario") || evento.target.classList.contains("container_nome_funcionario"))
                    {
                        console.log(evento.target.parentNode)
                        definirSelecaoFuncionario(evento.target.parentNode)
                    }
                    else
                    {
                        definirSelecaoFuncionario(evento.target.parentNode.parentNode)

                    }
                }
            )
        })

}

construirTelaCadastro(2);



const tratarUploadImagem = ({target}) =>
{
    // console.log("chegou")
    imagemPreview(target.id, "imagem_servico");
    document.getElementById("imagem_servico").style.display = "flex";
    document.getElementById("icone_add_imagem_servico").style.display = "none";
};

const getFuncionarios = () => 
{
    return "obj_funcionarios";
}

const getGeneros = () =>
{
    return "generos";
}

const getTiposAtendimentos = () =>
{
    return "tipos"
}

const pegarDadosServico = (id_empresa) =>
{
    const data = {};
    data['acao'] = 'createServico';
    data ['"id_empresa"'] = id_empresa;
    data ['nome_servico'] = document.getElementById('input_titulo_servico').value;
    data['tempo_duracao'] = document.getElementById('input_duracao_servico').value;
    data['desconto'] = document.getElementById('input_desconto').value;
    data['intervalo'] = document.getElementById('input_intervalo').value;
    data['preco'] = document.getElementById('input_preco_servico').value.replace(".", "").replace(',', '.');
    data['detalhes'] = document.getElementById('input_observacoes').value;
    data['id_especialidade'] = document.getElementById("select_especialidade").value;
    data['id_parte_corpo'] = document.getElementById("select_parte_corpo").value;
    data['ativo_para_uso'] = '1';
    data['funcionarios'] = getFuncionarios();
    data['generos'] = getGeneros();
    data['tipos_atendimento'] = getTiposAtendimentos();


    console.log(data);
    return data
}

const salvarServico = (id_empresa) =>
{
    const informacoes_servico = pegarDadosServico();

    console.log(informacoes_servico);
}


const reorganizarOpcoesSelectPartesCorpo = (opcao_escolhida) =>
{
    //FECHANDO OS DESNECESSARIOS
    const elementos = document.getElementsByClassName("options_partes_corpos")
    const arr_options = [...elementos]
    arr_options.map((elemento)=> elemento.disabled = true)

    //DISPONIBILIZANDO OS NECESSÁRIOS
    arr_especialidades_partes_corpo[opcao_escolhida].map(
        (elemento)=>
        {
            document.getElementById(`option_parte_corpo${elemento.id_parte_corpo}`).disabled = false;
        }

    )
}




// ------------- EVENTOS --------------- //

document.getElementById("botao_salvar_criacao").addEventListener("click", 
    () => 
    {
        console.log("teste")
        salvarServico(id_empresa)
    }
)
document.getElementById("input_imagem_servico").addEventListener("change", (tratarUploadImagem));


document.getElementById('select_especialidade').addEventListener('input', (evento) => reorganizarOpcoesSelectPartesCorpo(evento.target.value))