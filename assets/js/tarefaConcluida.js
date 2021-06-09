
//criar BotaoConclui + anexar em li (tarefa)
    
    const BotaoConclui= ()=> {
       
        const botaoConclui = document.createElement('button');
              botaoConclui.innerText = 'Concluído'
              botaoConclui.classList.add('check-button')
        
        botaoConclui.addEventListener('click', concluirTarefa)
        
        return botaoConclui;
    
    }    

//efeito BotaoConclui
    const concluirTarefa = (evento)=>{
        const botaoClicado = evento.target;
        const tarefaConcluida = botaoClicado.parentElement;
        tarefaConcluida.classList.toggle('done')
    }

    export default BotaoConclui;