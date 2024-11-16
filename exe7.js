var  numero1 = parseFloat(prompt("Digite o primeiro número:"));
var  numero2 = parseFloat(prompt("Digite o segundo número:"));
var  numero3 = parseFloat(prompt("Digite o terceiro número:"));

var  maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
    maiorNumero = numero1;

} else if (numero2 >= numero1 && numero2 >= numero3) {
    maiorNumero = numero2;

} else {
   (maiorNumero = numero3);

}

alert("O maior número é: " + maiorNumero);