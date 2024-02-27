//obtener datos del local storage
//pasamos como parametro el nombre de la llave que contiene el valor a obtener
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const producto = localStorage.getItem('producto');
//convertir string a objeto
console.log(JSON.parse(producto));

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));