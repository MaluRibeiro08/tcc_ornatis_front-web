"use strict"

// <!-- SECAO DADOS DE DADOS PESSOAIS -->

const input_nome_consumidor = document.getElementById('input_nome_consumidor');
const input_data_nascimento = document.getElementById('input_data_nascimento');
const input_cpf = document.getElementById('input_cpf');
const input_telefone = document.getElementById('input_telefone');
const radio_feminino = document.getElementById('radio_feminino');
const radio_masculino = document.getElementById('radio_masculino');
const radio_outro = document.getElementById('radio_outro');
const radio_prefiro_nao_informar = document.getElementById('radio_prefiro_nao_informar');


// <!-- SECAO DADOS DO CABELO -->

const tamanho_cabelo1 = document.getElementById('tamanho1');
const tamanho_cabelo2 = document.getElementById('tamanho2');
const tamanho_cabelo3 = document.getElementById('tamanho3');
const tamanho_cabelo4 = document.getElementById('tamanho4');
const tamanho_cabelo5 = document.getElementById('tamanho5');
const sem_cabelo = document.getElementById('sem_tamanho');
const select = document.getElementById('select_publico_alvo');
const opcaoValor = select.options[select.selectedIndex].value;

//<!-- SECAO DADOS DE LOCALIZAÇÃO -->

const input_rua = document.getElementById('input_rua');
const input_cep = document.getElementById('input_cep');
const input_bairro = document.getElementById('input_bairro');
const input_numero = document.getElementById('input_numero');
const input_complemento = document.getElementById('input_complemento');
const id_cidade = document.getElementById('id_cidade');
const input_estado = document.getElementById('input_estado');

//<!-- SECAO DADOS DE LOGIN-->

const input_email = document.getElementById('input_email');
const input_senha = document.getElementById('input_senha');
const input_confirmacao_senha = document.getElementById('input_confirmacao_senha');


const prepararDadosParaSalvar = () => {
    const data = {};
    data['acao'] = 'createConsumidor';

    // <!-- SECTION DADOS DE DADOS PESSOAIS -->
    data['nome_consumidor'] = input_nome_consumidor.value;
    data['data_nascimento'] = input_data_nascimento.value
    data['cpf_consumidor'] = input_cpf.value;
    data['telefone'] = input_telefone.value;

    if (radio_feminino.checked == true) {
        data["id_genero"] = 1
    }
    if (radio_masculino.checked == true) {
        data["id_genero"] = 2
    }
    if (radio_outro.checked == true) {
        data["id_genero"] = 3
    } 
    if (radio_prefiro_nao_informar.checked == true) {
        data["id_genero"] = 4
    }

    data["id_tipo_cabelo"] = document.querySelector(".tipo_cabelo_escolhido").value


    // <!-- SECTION DADOS DO CABELO -->
    //testar check do tamanho do cabelo
    //testar qual select foi clicado
    //fazer arrays para check e select 

    // data['1'] = tamanho_cabelo1.value;
    // data['2'] = tamanho_cabelo2.value;
    // data['3'] = tamanho_cabelo3.value;
    // data['4'] = tamanho_cabelo4.value;
    // data['5'] = tamanho_cabelo5.value;

    if (tamanho_cabelo1.checked == true) {
        data["id_comprimento_cabelo"] = 1
    }
    if (tamanho_cabelo2.checked == true) {
        data["id_comprimento_cabelo"] = 2
    }
    if (tamanho_cabelo3.checked == true) {
        data["id_comprimento_cabelo"] = 3
    }
    if (tamanho_cabelo4.checked == true) {
        data["id_comprimento_cabelo"] = 4
    }
    if (tamanho_cabelo5.checked == true) {
        data["id_comprimento_cabelo"] = 5
    }

    if (opcaoValor == 'preto') {
        data["id_cor_cabelo"] = 1
    }
    if (opcaoValor == 'loiro') {
        data["id_cor_cabelo"] = 2
    }

    // data["id_cor_cabelo"] = opcaoValor.value;

    //<!-- SECTION DADOS DE LOCALIZAÇÃO -->
    data['cep'] = input_cep.value.replace("-", "");
    data['bairro'] = input_bairro.value;
    data['numero'] = input_numero.value;
    data['rua'] = input_rua.value;
    data['complemento'] = input_complemento.value;
    data['id_cidade'] = id_cidade.value;
    //via cep
    // data['0'] = input_estado.value;

    //<!-- SECTION DADOS DE LOGIN-->

    //add foto 
    data['email_consumidor'] = input_email.value;
    data['senha_consumidor'] = input_senha.value;

    return data
}

export{prepararDadosParaSalvar}