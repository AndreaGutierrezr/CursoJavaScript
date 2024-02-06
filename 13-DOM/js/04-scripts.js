//QuerySelector retorna maximo un elemento, pero permite seleccionar incluso clases
//si no existe no retorna nada


const card = document.querySelector('.card');
console.log(card);


//podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard)


//selecciona id
const form = document.querySelector('#formulario');
console.log(form);

//seleccionaar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);