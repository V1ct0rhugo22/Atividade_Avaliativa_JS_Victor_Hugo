function botaoMult() {
let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let numero1 = 0, numero2 = 0;

  if (num1 instanceof HTMLInputElement) {
    numero1 = parseInt(num1.value);
  }
  if (num2 instanceof HTMLInputElement) {
    numero2 = parseInt(num2.value);
  }



let multiplo5 = 0;

let menor = Math.min(numero1 ,numero2);
let maior = Math.max(numero1 ,numero2);



while (menor <= maior) {

    if ((menor % 5) === 0) {
        multiplo5++;
    } else {
        menor++;
    }
}

let resultado = document.getElementById('resultado')

if(resultado !== null) {
    resultado.textContent = 'Seus multiplos de 5 são: ' + multiplo5;
}

}
function calcular() {
    let CalcularMultiploBtn = document.getElementById('CalcularMultiploBtn');
    if (CalcularMultiploBtn !== null) {
        CalcularMultiploBtn.addEventListener('click', botaoMult);
    }
}
document.addEventListener('DOMContentLoaded', calcular);