//El codigo se va a ejecutar hasta que una condición se cumpla o se deje de cumplir

// for(let i = 0; i < 10; i++){
//     console.log(`Número: ${i}`);
// }


//verificar números pares e impares
// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(`El número: ${i} es par`);
//     }else{
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 25 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for(let i = 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].nombre} precio: ${carrito[i].precio}`);
}