let soma = (num1, num2) => {
    return num1 + num2;
}

let subt = (num1, num2) => {
    return num1 - num2;
}

let mult = (num1, num2) => {
    return num1 * num2;
}

let divi = (num1, num2) => {
    return num1 / num2;
}

let resposta1 = Number(prompt(`let me get your first number!
`));
let resposta2 = Number(prompt(`let me get your second number!
`));

soma(resposta1, resposta2);
subt(resposta1, resposta2);
mult(resposta1, resposta2);
divi(resposta1, resposta2);

console.log(soma(resposta1, resposta2));
console.log(subt(resposta1, resposta2));
console.log(mult(resposta1, resposta2));
console.log(divi(resposta1, resposta2));


