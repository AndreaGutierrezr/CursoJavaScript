const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
//Asignar valores a una variable
const nombre = producto.nombre;
console.log(nombre);

//Object destructuring
//Extrae el valor y crea la variable
const {precio, disponible} = producto;
console.log(precio);
console.log(disponible);