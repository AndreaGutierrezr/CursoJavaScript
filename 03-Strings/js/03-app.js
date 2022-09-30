const productoDescripcion = 'Monitor 20 pulgadas ';
const productoPrecio = '30 USD ';

console.log(productoDescripcion.concat(productoPrecio)); //uniendo las dos cadenas
console.log(productoDescripcion.concat('En descuento'));
console.log(productoDescripcion + "con un precio de: " + productoPrecio);
console.log("El producto: " + productoDescripcion + "tiene un precio de: " + productoPrecio);
console.log("El producto: " , productoDescripcion , "tiene un precio de: " , productoPrecio);
console.log(`El producto ${productoDescripcion} tiene un precio de $ ${productoPrecio}`);