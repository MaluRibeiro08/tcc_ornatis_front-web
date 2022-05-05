//abrir menu lateral

function abrir_menu(){
    document.getElementById('menu').style.width = '500px';
}

function fechar_menu(){
    document.getElementById('menu').style.width = '0px'
}

//modal editar

function abrirEditar(){
    document.getElementById('popup_editar').style.display = "block"
}

function fecharEditar(){
    document.getElementById('popup_editar').style.display = "none"
}

//modal excluir

function abrirExcluir(){
    document.getElementById('popup_excluir').style.display = "block"
}

function fecharExcluir(){
    document.getElementById('popup_excluir').style.display = "none"
}

//fazer aparecer a imagem quando fizer upload (MODAL EDITAR)

let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_funcionario.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

/*****CONSUMO DE API******/

const id_empresa = 19;
const id_funcionario = 1;
const btn_editar = document.getElementById('btn_editar');

/***fetch***/

const carregarFuncionarios =   (id_empresa) => fetch(`http://10.107.144.8/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const teste = async () =>
{
    const response = await carregarFuncionarios(id_empresa);
    // console.log(response)
    const informacoes = await response.json();
    console.log(informacoes);
}
teste();

// console.log("oi")

// console.log("tchau")

/**atibuindo ids diferentes para cada usuario**/


const novo_funcionario = document.createElement("div") 

novo_funcionario.id = `container_borda_funcionario${id_funcionario}`;


novo_funcionario.classList.add("container_borda_funcionario")
novo_funcionario.innerHTML = 
            `
            <div id="borda">
                    <div> <img id='foto_funcionario${id_funcionario}' class="foto" src="" alt=""> </div> 
                    <div id="dados_fun">
                        <div id='nome${id_funcionario}'><a href="../detalhes/detalhes_funcionario.html"><h4>Arielly Angelo</h4></a></div> 
                        <div id="editar_excluir">
                            <a href="javascript: abrirEditar'(${id_funcionario})';><span id="edit" class="material-icons-outlined">edit </span></a>
                              <section class="fundo_popup">

                              /**POP UP DE EDIÇÃO**/

                                  <div id="popup_editar">
                                  <a href="javascript: fecharEditar();" class="aaa"> Editar funcionário<span id="close" class="material-icons-outlined">close </span></a>
                                  <div id="modal"> 
                 
                                      <div id="informacoes">
                                          <div id="campo">
                                              <label>Nome</label>
                                              <input id='nome_funcionario${id_funcionario}' class="input_linha" type="text">
                                          </div>
                                          <div id="campo">
                                              <label>Email</label> 
                                              <input id="email_funcionario${id_funcionario}" class="input_linha" type="text" name="search" placeholder=""/>
                                          </div>
                                          <div id="campo">
                                              <label>Senha</label> 
                                              <input id='senha_funcionario${id_funcionario}' class="input_linha" type="text" name="search" placeholder=""/>
                                          </div>
                                          <div class="max_width_funcionario">
                                              <div class="image_container">
                                                  <img src="../../img/add-photo-icon-isolated-white-background-camera-plus-new-vector-stock-173611946.jpeg" id="img_photo_funcionario">
                                              </div>
                                               <input type="file" id='fl_image_funcionario${id_funcionario}' name="fl_image_funcionario" accept="image/*">          
                                          </div>
                                      </div>  
                                      <div id="horario">
                                          <div id="campo">
                                             <label>Horário de trabalho:</label> 
                                             
                                             <!-- <a href="#" onmouseover="abrir()">Passar mouse</a> -->
                                             <div id="container_funcionamento_scroll">
                                                 <div id="container_geral_domingo" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_1${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_1">
                                                     <label class= "lable_input" for="input_dia_semana_1">Domingo</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_1${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_1${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_1${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_1${id_funcionario}' type="text" placeholder="término">
                                                     </div> 
                                                 </div>
                                             </div>
                                             <div id="container_geral_segunda-feira" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_2${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_2">
                                                     <label class= "lable_input" for="input_dia_semana_2">Segunda-feira</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_2${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_2${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_2${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_2${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             <div id="container_geral_terca-feira" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_3${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_3">
                                                     <label class= "lable_input" for="input_dia_semana_3">Terça-feira</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_3${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_3${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_3${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_3${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             <div id="container_geral_quarta-feira" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_4${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_4">
                                                     <label class= "lable_input" for="input_dia_semana_4">Quarta-feira</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_4${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_4${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_4${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_4${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             <div id="container_geral_quinta-feira" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_5${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_5">
                                                     <label class= "lable_input" for="input_dia_semana_5">Quinta-feira</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_5${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_5${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_5${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_5${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             <div id="container_geral_sexta-feira" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_6${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_6">
                                                     <label class= "lable_input" for="input_dia_semana_6">Sexta-feira</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_6${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_6${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_6${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_6${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             <div id="container_geral_sabado" class="container_geral_dia_funcionamento" >
                                                 <div class="container_item_check">
                                                     <input id='input_dia_semana_7${id_funcionario}' class="input" type="checkbox" name="check_dia_semana_7">
                                                     <label class= "lable_input" for="input_dia_semana_7">Sábado</label>      
                                                 </div>
                                                 <div class="container_geral_horarios_funcionamento">
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='1input_hora_inicio_7${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='1input_hora_termino_7${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                     <div class="container_horario_funcionamento">
                                                         <input class="input_hora_funcionamento" id='2input_hora_inicio_7${id_funcionario}' type="text" placeholder="início">
                                                         <p>até</p>
                                                         <input class="input_hora_funcionamento" id='2input_hora_termino_7${id_funcionario}' type="text" placeholder="término">
                                                     </div>
                                                 </div>
                                             </div>
                                             </div>
                                             
                                         </div>  
                                         <button id="btn_salvar_funcionario">
                                            <h2>Salvar</h2>
                                         </button>
                                     </div>
                                      </div>
                                  </div>
                              </section>
                              
                              <a href="javascript: abrirExcluir();"><span id="delete" class="material-icons-outlined">delete </span></a>
                              <div id="popup_excluir">
                                  <a href="javascript: fecharExcluir();" class="aaa">Excluir funcionário<span id="closeExcluir" class="material-icons-outlined">close </span></a>
                                  <h2>Deseja excluir esse funcionário?</h2>
                                  <div id="butons_excluir">
                                      <button id='buttonExcluir${id_funcionario}' >Sim</button>
                                      <button id="buttonExcluir">Não</button>
                                  </div>
                              </div>
                          </div>
                    </div>
                    </div>
                    
                </div>
            `

/**ação de deletar funcionario**/

            const excluirFuncionario = (id_funcionario) =>
            {
                const data = {};
                data["acao"] = 'desabilitarFuncionario';
                data["id_funcionario"] = id_funcionario;
        
                const options =
                {
                    method : 'DELETE',
                    body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
                    headers: 
                    {
                        'content-type' : 'application/json'
                    }
                }
                 fetch(url, options).then(response => response.json()).then(data => {
                    console.log(data)})
        
                // document.formulario_imagem.submit();
                alert("Seu funcionario foi excluído!")
                // window.location.href = "../listagem/lista_funcionarios.html";   
            }

/**ação editar funcionário**/

        




