/*let somador = (num1, num2) => {
    return num1 + num2;
}
let pergunta1 = Number(prompt(`Digite primeiro número!`));
let pergunta2 = Number(prompt(`Digite segundo número!`));

console.log(somador(pergunta1, pergunta2));
*/

/*let verificador = (num1, num2) => {
    if(num1 >= num2){
        console.log(num1 >= num2);
    }else{
        console.log(num1 >= num2);
    }
}
let pergunta1 = Number(prompt(`Digite primeiro número!`));
let pergunta2 = Number(prompt(`Digite segundo número!`));
verificador(pergunta1, pergunta2);
*/

/*let impoPa = (num1) => {
    if(num1 % 2 === 0){
        console.log(`É Pá!`);
    }else{
        console.log(`Não é Pá!`);
    }
}

let pergunta1 = Number(prompt(`Digite o número!`));

impoPa(pergunta1);*/

let contadorM = (palavrinha) => {
    console.log(`Tem ${palavrinha.length} letras!`)
    console.log(`Versão maiúscula: ${palavrinha.toUpperCase()}`)
}

let pergunta1 = prompt(`Me diga tua palavrinha!`)

contadorM(pergunta1);

