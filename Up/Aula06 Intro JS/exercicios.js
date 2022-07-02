const console = require('./extras/console');

//Exercício 01
/**
 Escreva um algoritmo que leia um número digitado pelo usuário 
 e mostre a mensagem “Número maior do que 10! ”, caso este número 
 seja maior, ou “Número menor ou igual a 10! ”, caso este número 
 seja menor ou igual.
 */
function exercicio1(){

    const numero = console.getNumber("Informe um número:");

    if (numero <= 10){
        console.log("Número menor ou igual a 10!");
    } else {
        console.log("Número maior do que 10!");
    }


    // if (numero > 10){
    //     console.log("Número maior do que 10!");
    // } else {
    //     console.log("Número menor ou igual a 10!");
    // }

}

//exercicio1();

//Exercício 16
/*
Elabore um algoritmo que receba três notas de um aluno e retorne a sua média aritmética. 
Exemplo: nota1 = 10.0, nota2 = 5.5, nota3 = 8.0. Média: 7.83
*/
function exercicio16(){

    const nota1 = console.getNumber("Informe a nota 1")
    const nota2 = console.getNumber("Informe a nota 2")
    const nota3 = console.getNumber("Informe a nota 3")
    const media = (nota1 + nota2 + nota3) / 3;
    console.log("Média aritmética: " + media);

}
exercicio16();






class Motor{

    //0 -> 150 graus
    private int temperaturaMaxima;

    public void setTemperaturaMaxima(int temperatura){
            if (temperatura > 150) {
                //Tratamento para não aceitar valor
            }
            this.temperaturaMaxima = temperatura;
    }


}