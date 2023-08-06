//FUNÇÕES
/**Functions são uma forma de empacotar a funcionalidade que você deseja reutilizar. É possível definir um corpo de código como uma função que é executada quando você chama o nome da função em seu código. Esta é uma boa alternativa para escrever repetidamente o mesmo código. Você já viu alguns usos de funções. Por exemplo: 
 * 
 * Essas funções, document.querySelector e alert, são incorporadas ao navegador.
 * 
 * a função alert() faz com que uma caixa pop-up apareça dentro da janela do navegador, mas precisamos dar a ela uma string como argumento para informar à função qual mensagem exibir.
*/

let variable = document.querySelector("h1");
alert("olaaaaaaaa");

/**Você também pode definir suas próprias funções. No próximo exemplo, criamos uma função simples que recebe dois números como argumentos e os multiplica: */

function multiply(num1,num2)
{
    let result = num1 * num2;
    return result;
}
console.log(multiply(4, 7));
//multiply(20, 20);
//multiply(0.5, 3);
/**A instrução return diz ao navegador para retornar a variável result da função para que ela esteja disponível usar. Isso é necessário porque as variáveis definidas dentro das funções só estão disponíveis dentro dessas funções. Isso é chamado de variável scoping. (Leia mais sobre escopo de variável.) */