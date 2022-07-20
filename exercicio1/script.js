let nome = ""  
let idade = 
console.log(typeof nome);
console.log(typeof idade);

// Ao usar o typeof na váriável nome ele retorna como string devido as aspas utilizadas enquanto que a variável idade retorna undefined por não ter nenhum valor atribuido a ela ;

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);  

// Ambas as variáveis estão como o tipo primitivo string por terem sido coletadas pelo prompt;

console.log("Olá", nome, "você tem", idade, "anos.");