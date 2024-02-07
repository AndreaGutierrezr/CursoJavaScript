//eventos con el teclado

const busqueda = document.querySelector('.busqueda');
//funcion anonima
//se ejecuta cuando presionas una tecla
// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo');
// });

//presionas y sueltas la tecla
// busqueda.addEventListener('keyup', () => {
//     console.log('escrito');
// });

//das click por fuera del formulario
// busqueda.addEventListener('blur', () => {
//     console.log('blur');
// });

//copiar
// busqueda.addEventListener('copy', () => {
//     console.log('copy');
// });

//pegar
// busqueda.addEventListener('paste', () => {
//     console.log('pegar');
// });

//cortar
// busqueda.addEventListener('cut', () => {
//     console.log('cortar');
// });

//se ejecuta cuando realizas alguno de los eventos anteriores a excepcion del blur
//e es el evento que esta sucediendo
busqueda.addEventListener('input', (e) => {
//    console.log(e.type); //indica sobre que elemento estamos trabajando
//    console.log(e.target); //indica el elemento en especifico en el que estamos trabajando
    console.log(e.target.value); //saber que estamos escribiendo
});