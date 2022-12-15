//Congelar un objeto para no poderlo modificar
//MODO ESTRICTO
//exige que se cumplan ciertas reglas a la hora de escribir codigo
"use strict";
const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion :{
        peso: '1kg',
        medida : '1m',
        fabricacion : {
            pais: 'México',
            ciudad : 'Puebla'
        }
    }
}
//prevenir que el objeto sea modificado
Object.freeze(producto); //es como congelar el objeto para que no pueda ser modificado
//saber si el objeto esta congelado o no
console.log(Object.isFrozen(producto));
producto.disponible = false;
producto.imagen = 'imagen.jpg';
console.log(producto);