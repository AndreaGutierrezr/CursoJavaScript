const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televison', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//no crea un nuevo arreglo
// carrito.forEach(function(producto){
//     console.log(`${producto.nombre} - Precio: ${producto.precio}`);
// })

const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

//crea un arreglo nuevo
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);