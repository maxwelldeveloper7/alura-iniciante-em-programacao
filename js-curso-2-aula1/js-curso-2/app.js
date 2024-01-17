let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você decobriu o número secreto com ${tentativas} ${palavra}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        const botaoNovoJogo = document.getElementById('reiniciar');
        botaoNovoJogo.removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    const chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}