//EL OBJECT CONSTRUCTOR
//object literal
const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//object constructor
function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = false;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);