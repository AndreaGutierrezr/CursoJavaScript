const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
console.log(producto);

//Agregar nuevas propiedades al objeto
//Para asignar el valor a una propiedad fuera del objeto se utiliza el signo =
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades al objeto
delete producto.disponible;
console.log(producto);