function saudacao() {
    console.log('Olá, mundo!');
}

function saudacaoNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobro(numero){
    return numero * 2;
}

function media(n1, n2, n3){
    return (n1+n2+n3)/3;
}

function maior(n1, n2){
    return n1 > n2 ? n1 : n2;
}

function multiplicaPorSiMesmo(numero){
    return numero * numero;
}

saudacao();
saudacaoNome('Maxwell');
console.log(dobro(10));
console.log(media(7,8,6));
console.log(maior(7,10));
console.log(multiplicaPorSiMesmo(10));
