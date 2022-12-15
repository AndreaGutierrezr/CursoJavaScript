//Objetos dentro de objetos
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
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida)
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.fabricacion.ciudad);