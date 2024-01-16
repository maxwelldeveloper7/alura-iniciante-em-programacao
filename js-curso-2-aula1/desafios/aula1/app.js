const titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsoleClicado(){
    console.log('O botão console foi clicado');
}

function botaoAlertaClicado(){
    alert('Eu amo JS');
}

function botaoPronmptClicado(){
    let cidade = prompt('Informe o nome de alguma cidade do Brasil.');
    alert(`Estive em ${cidade} e me lembrei de você.`);
}

function botaoSomaClicado(){
    let numero1 = parseInt(prompt('Informe o primeiro número'));
    let numero2 = parseInt(prompt('Informe o segundo número'));
    let soma = numero1 + numero2;
    alert(`O resultado da soma de ${numero1} e ${numero2} é ${soma}`);
}