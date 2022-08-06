/*
Lista de Cadastro de alunos
Percorrer a lista:
    - Percorrer de 0 até o número de alunos.
    - Se o número for par, escreva par e o número correspondente.
    - Se o número for ímpar, escreva ímpar e o número correspondente.
    - Se o número for 0, escreva Zero
*/



// Exemplo do while
let numeroDeAlunos = 10;
let contador = 0;
/*do
{
    if (contador == 0)
     {
    console.log ("O número atual é zero");
     }
    else if (contador %2 == 0)
    {
        console.log ("O número " +contador+ " é Par");
    }
    else
    {
        console.log(`o número ${contador} é Ímpar`);
    }
   contador++
} while (contador <= numeroDeAlunos);*/


// Exemplo While
while (contador <= numeroDeAlunos); {
    if (contador == 0); {
        console.log("O número atual é zero");
    }
    if (contador % 2 == 0) {
        console.log("O número " + contador + " é Par");
    } else {
        console.log(`o número ${contador} é Ímpar`);
    }
    contador++
}
// Exemplo for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log (contador);
    if (contador == 0) {
        console.log("O número atual é zero");
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é Par");
    } else {
        console.log(`o número ${contador} é Ímpar`);
    }
}