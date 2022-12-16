const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
//añadir nuevos elementos al arreglo con los metodos de los arreglos
//agregar al final del arreglo
meses.push('Agosto');
meses.push('Septiembre');
console.table(meses);

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
//funciones imperativas que modifican la variable original
//agregar el producto al carrito
carrito.push(producto);
carrito.push(producto2);
//agrega el producto al inicio del arreglo
carrito.unshift(producto3);
console.log(carrito);
console.table(carrito);