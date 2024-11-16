var salario = parseFloat(prompt("Digite o seu salário atual:"));
var aumento, percentual, novoSalario;


if (salario <= 280) {
    percentual = 20;
    aumento = salario * (percentual / 100);

} else if (salario > 280 && salario <= 700) {
    percentual = 15;
    aumento = salario * (percentual / 100);

} else if (salario > 700 && salario <= 1500) {
    percentual = 10;
    aumento = salario * (percentual / 100);

} else {
    percentual = 5;
    aumento = salario * (percentual / 100);
}


novoSalario = salario + aumento;


alert("Salário antes do reajuste: R$ " + salario.toFixed(2));
alert("Percentual de aumento aplicado: " + percentual + "%");
alert("Valor do aumento: R$ " + aumento.toFixed(2));
alert("Novo salário após o aumento: R$ " + novoSalario.toFixed(2));