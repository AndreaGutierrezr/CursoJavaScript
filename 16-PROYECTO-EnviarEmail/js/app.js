//se ejecuta una vez que todo el html haya sido descargado
document.addEventListener('DOMContentLoaded', function(){
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');
    //asignar eventos
    //esta función se ejecuta cuando nos salimos del input en el que estamos escribiendo
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        //trim elimina espacios en blanco
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return; //detiene la ejecución del codigo si se cumple con la condición
        }

        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(message, referencia){
        //comprueba si ya existe una alerta
        //referencia limita la selección por secciones de div
        limpiarAlerta(e.target.parentElement);

        //generar alerta con html
        const error = document.createElement('p');
        error.textContent = message;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        //inyectar el error al formulario 
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
});