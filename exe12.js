var valorHora = parseFloat(prompt("Digite o valor da sua hora de trabalho:"));
var horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));

var  salarioBruto = valorHora * horasTrabalhadas;


var descontoSindicato = salarioBruto * 0.03;


var  descontoFGTS = salarioBruto * 0.08;


var descontoIR;


if (salarioBruto <= 1500) {
    descontoIR = salarioBruto * 0.075; 
} else if (salarioBruto <= 2500) {
    descontoIR = salarioBruto * 0.15;  
} else if (salarioBruto <= 2550) {
    descontoIR = salarioBruto * 0.224; 
} else {
    descontoIR = salarioBruto * 0.275; }


var salarioLiquido = salarioBruto - descontoSindicato - descontoFGTS - descontoIR;


alert("Salário Bruto: R$ " + salarioBruto.toFixed(2));

alert("Desconto Sindicato (3%): R$ " + descontoSindicato.toFixed(2));

alert("Desconto FGTS (8%): R$ " + descontoFGTS.toFixed(2));

alert("Desconto Imposto de Renda: R$ " + descontoIR.toFixed(2));

alert("Salário Líquido: R$ " + salarioLiquido.toFixed(2));