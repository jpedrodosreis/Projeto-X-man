const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter',()=>{

        if(window.innerText < 450) {
            window.scrollTo({top:0, behavior:'smooth'});
        };

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagem();

        alterarDescricaoDoPersonagem(personagem);
        

        function alterarNomePersonagem() {
            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');
        }
    })
})

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
