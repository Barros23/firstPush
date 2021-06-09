// botao NOVO ITEM - tirar efeito de enviar! - só guardar a informaçao - DO IMPUT

/*  criar lista (.task) dentro da ul 
    criar botao-concluida
    criar botao-excluir */

//anexar arquivos.js
    import BotaoConclui from './tarefaConcluida.js'
    import BotaoDeletar from './tarefaDeletada.js'

const novaTarefa = document.querySelector('[data-form-button]');

//efeito clicar botao

const criarTarefa = (evento)=>{
    evento.preventDefault(evento);
    
    const input = document.querySelector ('[data-form-input]'); 
    const valor = input.value;
    
    const lista = document.querySelector ('[data-list]')
    const tarefa = document.createElement('li')
            tarefa.classList.add('task')
    const conteudo = `<p class="content"> ${valor} </p>`
            
            tarefa.innerHTML = conteudo;
    
        lista.appendChild(tarefa);
        
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeletar())
        
        input.value = " "
}

novaTarefa.addEventListener ('click', criarTarefa);

