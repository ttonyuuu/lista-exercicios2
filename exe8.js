var  precoProduto1 = parseFloat(prompt("Digite o preço do primeiro produto:"));

var  precoProduto2 = parseFloat(prompt("Digite o preço do segundo produto:"));

var precoProduto3 = parseFloat(prompt("Digite o preço do terceiro produto:"));


if (precoProduto1 < precoProduto2 && precoProduto1 < precoProduto3)
     {
    alert("O primeiro produto é o mais barato.");
} else if (precoProduto2 < precoProduto1 && precoProduto2 < precoProduto3)
     {
    alert("O segundo produto é o mais barato.");

} else if (precoProduto3 < precoProduto1 && precoProduto3 < precoProduto2)
     {
    alert("O terceiro produto é o mais barato.");

} else {

    alert("Pelo menos dois produtos têm o mesmo preço.");
}