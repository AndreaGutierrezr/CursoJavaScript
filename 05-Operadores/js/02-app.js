const number1 = 20;
const number2 = "20";
const number3 = 30;

//Revisar si dos numeros son iguales
//true-false
//comparador no estricto, solo se fija en el valor
console.log(number1 == number3);
console.log(number1 == number2);

//comparador estricto
//se fija en el valor y en el tipo de dato
console.log(number1 === number2);
console.log(number1 === parseInt(number2));

//verifica el tipo de dato
console.log(typeof number1);
console.log(typeof number2);

//Diferente
//verifica que los valores sean diferentes
const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2);
//comparador estrcito
console.log(number1 !== number2);
console.log(number1 !== parseInt(number2));