//Va a ejecutarse al menos una vez, por cada vez que haya elementos en el arreglo

const pendientes = [
    'Tarea',
    'Comer',
    'Proyecto',
    'Estudiar JavaScript'
];


pendientes.forEach( (pendiente, index) => {
    console.log(pendiente, index);
});

const carrito = [
    {nombre: 'Monitor 25 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];


//no crea un arreglo nuevo
carrito.forEach((producto) => {
    console.log(producto.nombre);
});

//crea un arreglo nuevo
carrito.map((producto) => {
    console.log(producto.precio);
});