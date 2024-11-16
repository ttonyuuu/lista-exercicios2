var  numero1 = parseFloat(prompt("Digite o primeiro número:"));

var  numero2 = parseFloat(prompt("Digite o segundo número:"));

var  numero3 = parseFloat(prompt("Digite o terceiro número:"));


var maior, meio, menor;

if (numero1 >= numero2 && numero1 >= numero3)
     {
    maior = numero1;

    if (numero2 >= numero3)
         {
        meio = numero2;
        menor = numero3;

    } else {
        meio = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2;
    if (numero1 >= numero3) {
        meio = numero1;
        menor = numero3;
    } else {
        meio = numero3;
        menor = numero1;
    }
} else {
    maior = numero3;
    if (numero1 >= numero2) {
        meio = numero1;
        menor = numero2;

    } else {

        meio = numero2;
        menor = numero1;
        
    }
alert("Ordem decrescente: " + maior + ", " + meio + ", " + menor);


}
