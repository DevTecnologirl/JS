/**A expressão dentro do if () é o teste. Isso usa o operador de igualdade estrita (conforme descrito acima) para comparar a variável iceCream com a string chocolate para ver se as duas são iguais. Se esta comparação retornar true, o primeiro bloco de código será executado. Se a comparação não for verdadeira, o segundo bloco de código — após a instrução else — será executado. */
//CONDICIONAIS
let sabor = "morango";

if (sabor === "morango")
{
    console.log("Amei! Meu sabor predileto.");
} else {
    console.log(`Não gosto de ${sabor}.`);
}