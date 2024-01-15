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