//find crea un nuevo arreglo basado en la condicion que se esta revisando
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//con un foreach
let resultado = '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet'){
        // return resultado = producto;
        resultado = carrito[index];
    }
});

console.log(resultado);


//con find
//solo retorna el primer elemento que cumpla con la condicion
const resultado2 = carrito.find((producto) => {
    return producto.nombre === 'Tablet';
});

console.log(resultado2);