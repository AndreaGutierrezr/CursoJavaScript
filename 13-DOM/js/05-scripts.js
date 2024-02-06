//querySelectorAll, devuelve todos los elementos que cumplan con la condicion del selector

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);


//si un elemento no existe retorna un NodeList vacio
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);