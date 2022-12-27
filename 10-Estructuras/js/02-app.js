//un signo de igual es asignación
const puntaje = 1000;
const puntaje2 = "1000";

//devuelve el tipo de dato
console.log(typeof puntaje);
console.log(typeof puntaje2);
//dos signos de igual son para comparar es un operador no estricto

//comparar que sea diferente !=
// if(puntaje != 1000){
//     console.log('Si es diferente');
// }

//operador estricto revisa valor y tipo de dato
if(puntaje === "1000"){
    console.log('Si es igual');
}else{
    console.log('No es igual');
}