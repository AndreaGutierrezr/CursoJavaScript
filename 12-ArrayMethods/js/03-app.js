//arreglo de indices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


//arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//reduce, toma una cantidad de datos para unirlos y entregar un resultado

//foreach
let total = 0;
carrito.forEach((producto) =>{
    return total += producto.precio;
});
console.log(total);

//reduce
//recibe como parametros el valor anterior y el valor actual
//el valor inicia en 0 por eso se pone asi.
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);