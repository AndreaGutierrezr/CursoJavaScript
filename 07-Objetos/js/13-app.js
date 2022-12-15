const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//regresa las llaves del objeto
console.log(Object.keys(producto));
//regresa los valores asignados a las llaves
console.log(Object.values(producto));
//regrea llaves y valores
//retorna valores en pares
console.log(Object.entries(producto));