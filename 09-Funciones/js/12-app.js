//Arrow functions con Map y Foreach
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televison', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

// const nuevoArreglo = carrito.map( (producto) => {
//     return `${producto.nombre} - precio: ${producto.precio}` ;
// })

//no crea un nuevo arreglo
carrito.forEach( producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

//crea un arreglo nuevo
carrito.map( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

// const nuevoArreglo = carrito.map( producto => `${producto.nombre} - precio: ${producto.precio}` );