//eventos dentro de un formulario
const formulario = document.querySelector('#formulario');

//funcion anonima
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault(); //previene la accion que realizaria el elemento por default, en este caso enviar un formulario
//     console.log('Buscando...');
//     console.log(e.target.method); //tipo de metodo que utiliza el formulario
//     console.log(e.target.action); //ruta de donde redirige el formulario
// });


//declaracion de funcion
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //previene la accion que realizaria el elemento por default, en este caso enviar un formulario
    console.log('Buscando...');
    console.log(e.target.method); //tipo de metodo que utiliza el formulario
    console.log(e.target.action); //ruta de donde redirige el formulario
};