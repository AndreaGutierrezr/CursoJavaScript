//ejemplo de carrito de compras
const carrito = [];
//definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
const producto4 = {
    nombre: 'Celular 2',
    precio: 100
}
const producto5 = {
    nombre: 'Tablet',
    precio: 5000
}
//funciones imperativas que modifican la variable original, la declarativa no
//agregar el producto al carrito
carrito.push(producto);
carrito.push(producto2);
//agrega el producto al inicio del arreglo
carrito.unshift(producto3);
carrito.push(producto4);
console.table(carrito);
//Eliminar último elemento de un arreglo
carrito.pop();
console.table(carrito);
//Eliminar del inicio del arreglo
carrito.shift();
//toma dos parametros, uno es la posición donde va a iniciar a cortar y el segundo es cuantos elementos quieres eliminar
carrito.splice(1,1);
console.table(carrito);