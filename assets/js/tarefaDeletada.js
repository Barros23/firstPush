//criar BotaoDeletar + anexar li (tarefa)

const BotaoDeletar= ()=>{
    const botaoDeletar = document.createElement('button');
          botaoDeletar.innerText = 'Deletar'
          botaoDeletar.classList.add('delete-button')
    
    botaoDeletar.addEventListener('click', deletarTarefa)
          
    return botaoDeletar;
}

//efeito BotaoDeletar

const deletarTarefa = (evento)=>{
const botaoDeletarClicado = evento.target;
const tarefaDeletada = botaoDeletarClicado.parentElement;

tarefaDeletada.remove();
}

export default BotaoDeletar;