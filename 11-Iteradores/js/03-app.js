//Fizz Buzz
// Los numeros multiplos de 3 y 5 deben imprimir en la consola Fizz Buzz
// Los numeros multiplos de 5 deben imprimir en la consola Buzz
// Los numeros multiplos de 3 deben imprimir en la consola Fizz

for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log(`${i} Fizz Buzz`);
        continue;
    }else if(i % 5 === 0){
        console.log(`${i} Buzz`);
        continue;
    }else if(i % 3 === 0){
        console.log(`${i} Fizz`);
        continue;
    } console.log(i);
}