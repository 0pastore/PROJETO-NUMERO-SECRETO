let listaSorteados = []

let numLimite = 10

let numeroSecreto = gerarNumAle();

let numTentativas = 1

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAle();
    limparCampo();
    numTentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numTentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${numTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
         } else {
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }
            numTentativas++;
            limparCampo()
        }
    }

function gerarNumAle(){
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementosLista = listaSorteados.length;

    if(qtdElementosLista == numLimite){
        listaSorteados = [];
    }

    if (listaSorteados.includes(numeroEscolhido)){
        return gerarNumAle();
    } else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


