 var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var  nota2 = parseFloat(prompt("Digite a segunda nota:"));

var media = (nota1 + nota2) / 2;


if (media === 10) {

    alert("Aprovado com distinção");

} else if (media >= 7) {
    alert("Aprovado");

} else{
    alert("Reprovado");

} 
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Calcula a média das duas notas
let media = (nota1 + nota2) / 2;

// Determina a classificação com base na média
let conceito;

if (media >= 9 && media <= 10) {
    conceito = "A";
} else if (media >= 7.5 && media < 9) {
    conceito = "B";
} else if (media >= 6.0 && media < 7.5) {
    conceito = "C";
} else if (media >= 4.0 && media < 6.0) {
    conceito = "D";
} else if (media >= 0.0 && media < 4.0) {
    conceito = "E";
} else {
    conceito = "Valor inválido";
}

// Exibe a média e o conceito
console.log("Média: " + media.toFixed(1));  // Exibe a média com 1 casa decimal
console.log("Conceito: " + conceito);