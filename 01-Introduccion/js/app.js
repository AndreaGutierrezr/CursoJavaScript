//pregunta al usuario su nombre
const nombre = prompt('Cual es tu nombre?');
//seleccionar elementos del HTML
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;