console.log('Desafio 1');
let altura = parseFloat(prompt('Informe sua altura em metros'));
let peso = parseFloat(prompt('Informte seu peso em quilogramas'));

function imc(peso, altura){
    return  peso / (altura * altura);    
}

console.log(`Seu imc é ${imc(peso, altura)}`);
console.log('-------------------------------');
console.log('');


console.log('Desafio 2');
let numeroFatorial = parseInt(prompt('Informe um número para calcularmos o seu fatorial'));

function fatorial(numero){
    let resultado = 1;
    let i = 1;

    while (i <= numero){
        resultado *= i;
        i++;
    }
    return resultado;
}

console.log(`O resultado do calculo fatorial do número ${numeroFatorial} é ${fatorial(numeroFatorial)}`);
console.log('-------------------------------');
console.log('');


console.log('Desafio 3');

let real = parseFloat(prompt('Informe o valor em reais para saber quanto vale em dolar'));

function realParaDolar(valor){
    dolar =  valor / 4.8
    return `$${dolar}`;
}
console.log(realParaDolar(real));
console.log('-------------------------------');
console.log('');


console.log('Desafio 4');

let largura = parseFloat(prompt('Informe a largura da área'));
let comprimento = parseFloat(prompt('Informe a altura da área'));

function areaRetangular(l, c){    
    return l * c;
}
console.log(`A resultado do calculo da área é ${areaRetangular(largura, comprimento)}`);
console.log('-------------------------------');
console.log('');



console.log('Desafio 5');

let raio = parseFloat(prompt('Informe o raio da área circular'));

function calcularAreaDoCirculo(r) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

calcularAreaDoCirculo(raio)
console.log('-------------------------------');
console.log('');

console.log('Desafio 6');

let numero = parseFloat(prompt('Informe o número da taboada'));

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
}
mostrarTabuada(numero);
console.log('-------------------------------');
console.log('');