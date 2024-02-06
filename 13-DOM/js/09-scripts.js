//Eliminar elementos del DOM

// const primerEnlace = document.querySelector('a');
// console.log(primerEnlace);

// //eliminar por si mismo
// primerEnlace.remove();

//eliminar desde el padre, pasando la referencia del elemento a eliminar
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);