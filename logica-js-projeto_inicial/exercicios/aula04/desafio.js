console.log('<---------Desafio '+1+'--------->');
console.log('Olá, seja bem vindo!')
console.log('<---------Desafio '+2+'--------->');
let nome = 'Maxwell';
console.log(`Olá, ${nome}!`);
console.log('<---------Desafio '+3+'--------->');
nome = 'Maxwell';
alert(`Olá, ${nome}!`);
console.log('<---------Desafio '+4+'--------->');
let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Linguagem preferida: ${resposta}`);
console.log('<---------Desafio '+5+'--------->');
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
console.log('<---------Desafio '+6+'--------->');
valor1 = 20;
valor2 = 10;
resultado = valor1 - valor2;
console.log(`A difereneça entre ${valor1} e ${valor2} é igual a ${resultado}.`);
console.log('<---------Desafio '+7+'--------->');
let idade = prompt('Informe a sua idade');
let mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(mensagem);
console.log('<---------Desafio '+8+'--------->');
let numero = prompt('Informe um número posivito ou negativo qualquer.');
mensagem = numero >= 0 ? 'positivo' :  'negativo';
console.log(`Este número é ${mensagem}`);
console.log('<---------Desafio '+9+'--------->');
let contador = 1;
while(contador <= 10){
    console.log(contador)
    contador ++;
}
console.log('<---------Desafio '+10+'--------->');
let nota = 7;
mensagem = nota <= 7 ? 'Aprovado' : 'Reprovado';
console.log(mensagem);
console.log('<---------Desafio '+11+'--------->');
console.log(parseInt(Math.random()));
console.log('<---------Desafio '+12+'--------->');
console.log(parseInt(Math.random() * 10 + 1));
console.log('<---------Desafio '+13+'--------->');
console.log(parseInt(Math.random() * 1000 + 1));