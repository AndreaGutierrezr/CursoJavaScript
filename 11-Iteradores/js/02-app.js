//break corta la ejecución de un for

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         console.log('CINCO');
//         break;
//     }
//     console.log(`Número: ${i}`);
// }

//continue nos permite interceptar un elemento, identificarlo y continuar la ejeución

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Número: ${i}`);
// }


const carrito = [
    {nombre: 'Monitor 25 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} TIENE DESCUENTO`);
        continue;
    }
    console.log(`Producto ${carrito[i].nombre}`);
}