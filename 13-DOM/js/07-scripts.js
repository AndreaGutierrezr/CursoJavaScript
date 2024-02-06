const encabezado = document.querySelector('h1');
console.log(encabezado.style);

//En JS las que tienen dos palabras, se elimina el guión y la 2da palabra inicia con mayúscula
// ejemplos text-justify => textJustify, background-color => backgroundColor


//cambiamos estilos
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

//se recomienda agregar o quitar clases
const card = document.querySelector('.card');
console.log(card.classList);
//agregar clase
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);
//eliminar clase
card.classList.remove('card');
console.log(card.classList);