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
//sellar el objeto
//no se pueden eliminar ni agregar propiedades pero si modificar las existentes
Object.seal(producto); 
producto.disponible = false;
//saber si un objeto esta sellado
console.log(Object.isSealed(producto));
console.log(producto);