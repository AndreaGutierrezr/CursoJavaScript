const pruebaProducto = '                Monitor 20 pulgadas         ';
console.log(pruebaProducto);
console.log(pruebaProducto.length);

//Eliminar espacios del inicio
console.log(pruebaProducto.trimStart());
console.log(pruebaProducto.trimStart().length);

//Eliminar espacios del final
console.log(pruebaProducto.trimEnd());
console.log(pruebaProducto.trimEnd().length);

//Eliminar espacios del inicio y final al mismo tiempo
console.log(pruebaProducto.trimStart().trimEnd());
console.log(pruebaProducto.trimStart().trimEnd().length);
console.log(pruebaProducto.trim());
console.log(pruebaProducto.trim().length);

//Se pueden utilizar los métodos de forma encadenada (colocar ub método después de otro), esto se conoce también como channing