const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//crea un nuevo arreglo basado en el parametro que es evaluado
let resultado;

resultado = carrito.filter((producto)=>{
    return producto.precio > 400;
});

console.log(resultado);

resultado = carrito.filter((producto) => {
    return producto.precio < 600;
});

console.log(resultado);

resultado = carrito.filter((producto) => {
    return producto.nombre !== 'Audifonos';
});

console.log(resultado);