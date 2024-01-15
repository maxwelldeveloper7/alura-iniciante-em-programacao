alert('Boas vindas ao jogo do número secreto');
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);
let numeroSecreto = 5;
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto){
    alert('Acertou');
    //alert(`Isso ai! Você descobriu o número ${numeroSecreto}`);
} else{
    //alert('Você errou :(');
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}

// /**
//  * Desafio 2
//  */

// let diaDaSemana = prompt('Qual é o dia da semana?');
// if(diaDaSemana == 'Domingo' || diaDaSemana == 'Sábado'){
//     alert('Bom fim de senama!');
// }else{
//     alert('Boa Semana!');
// }

// let numero = prompt('Digite um número positivo ou negativo:');
// if(numero > 0){
//     alert('O número '+numero+' é positivo');
// }else{
//     alert('O número '+numero+' é negativo');
// }

// let pontuacao = prompt('Informe a pontuação:')
// if( pontuacao >= 100){
//     alert('Parabéns, você venceu!');
// }else{
//     alert('Tente novamente para ganhar.')
// }

// let saldo = 10000;
// alert(`Seu saldo em conta é ${saldo}`);

// let nome = prompt('Informe o seu nome');
// alert(`Bem vindo ${nome}!`)


// /**
//  * Desafio 1
//  */

// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemErro = 'Erro! Preencha todos os campos';

// alert('Boas vindas ao nosso site!');
// alert(mensagemErro);

// nome = prompt('Informe seu nome');
// idade = prompt('Informe sua idade');

// if(idade >= 18){
//     alert('Pode tirar a habilitação!');
// }