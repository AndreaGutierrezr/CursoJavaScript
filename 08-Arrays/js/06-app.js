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
//funciones declarativas que son un paradigma que expresan la logica sin describir tanto el flujo de control, no modifican la variable original
let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];
console.table(resultado);