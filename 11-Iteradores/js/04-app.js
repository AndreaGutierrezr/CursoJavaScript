//Se ejecuta mientras una condición sea verdadera

let i = 1; //inicializar el while

while(i <= 10){
    // console.log(i);
    // i++;

    //operador ternario
    ( i % 2 === 0 ) ? console.log(`${i} es par`) : console.log(`${i} es non`);
    i++;
}