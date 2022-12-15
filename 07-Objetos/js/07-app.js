//Un objeto al estar declarado como const sus propiedades si se pueden reescribir
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
producto.disponible = false;
delete producto.precio;
console.log(producto);