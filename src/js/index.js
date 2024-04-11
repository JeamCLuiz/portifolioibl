//obj 1, quando o usuario clicar no botão mostrar mais projetos ira mostrar mais projetos que estão escondidos
//passo 1 - pegar o botão mostrar no JS pra poder verificar quando o usuario clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
//passo 3 - identificar o clique do botão
botaoMostrarProjetos.addEventListener('click', () => {
   //passo 2 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos(); 
//obj 2 - escondern o botão de mostrar mais
    //passo 1 - pegar o botão e esconder ele
    esconderBotao();
});


function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

