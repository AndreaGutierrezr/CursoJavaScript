//every, todos los elementos de un arreglo deben cumplir con una condición para que nos
//regrese un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.every((producto) => {
    return producto.precio < 1000;
});
console.log(resultado);