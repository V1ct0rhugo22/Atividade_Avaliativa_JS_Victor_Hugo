/*
function executarOperacoes(numero1, numero2, operacao ) {
    return operacao(numero1, numero2)
}

function subtracao(numero1, numero2) {
    numero1 - numero2;
}
function adicao(numero1, numero2) {
    numero1 + numero2;
}
function divisao(numero1, numero2) {
    numero1 / numero2;
}
function multiplicacao(numero1, numero2) {
    numero1 * numero2;
}
*/


function subtracao() {
    let num1 = Number(document.getElementById('numero1').value);

    let num2 = Number(document.getElementById('numero2').value);

    const resultadoSub = num1 - num2;

    document.getElementById('resultado').textContent = `Subtração ${resultadoSub}`
}
function adicao() {
    let num1 = Number(document.getElementById('numero1').value);

    let num2 = Number(document.getElementById('numero2').value);

    const resultadoAd = num1 + num2;

    document.getElementById('resultado').textContent = `Adição ${resultadoAd}`
}
function divisao() {
    let num1 = Number(document.getElementById('numero1').value);

    let num2 = Number(document.getElementById('numero2').value);

    const resultadoDiv = num1 / num2;

    document.getElementById('resultado').textContent = `Divisão ${resultadoDiv}`
}
function multiplicacao() {
    let num1 = Number(document.getElementById('numero1').value);

    let num2 = Number(document.getElementById('numero2').value);

    const resultadoMult = num1 * num2;

    document.getElementById('resultado').textContent = `Multiplicação ${resultadoMult}`
}
function potenciacao() {
    let num1 = Number(document.getElementById('numero1').value);

    let num2 = Number(document.getElementById('numero2').value);

    const resultadoMult = num1 ** num2;

    document.getElementById('resultado').textContent = `potenciacao ${resultadoMult}`
}

function radiciacao() {
    let numRad = Number(document.getElementById('numeroRad').value);

    const resultadoRadiacao = Math.sqrt(numRad);

    document.getElementById('resultadoRad').textContent = `radiação ${resultadoRadiacao}`
}
