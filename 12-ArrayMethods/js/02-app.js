//Saber en que indice de nuestro arreglo se encuentra un elemento

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


//forma manual
// meses.forEach((mes, index)=>{
//     if(mes === 'Abril'){
//         console.log(index);
//     }
// });


//metodo para encontrar el indice de abril
const indice = meses.findIndex((mes) => {
    return mes === "Abril";
});
//Si no encuentra el valor retorna un -1
console.log(indice);


//encontrar un indice de un arreglo de objetos
//retorna el indice del primer elemento que encuentre
const indice2 = carrito.findIndex((producto) =>{
    return producto.precio === 100;
});
console.log(indice2);