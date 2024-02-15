//se ejecuta una vez que todo el html haya sido descargado
document.addEventListener('DOMContentLoaded', function(){
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
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

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return;
        }
        
        limpiarAlerta(e.target.parentElement);
        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(message, referencia){
        //comprueba si ya existe una alerta
        //referencia limita la selección por secciones de div
        limpiarAlerta(referencia);

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

    function validarEmail(email){
        //la expresión regular busca un patron en una cadena de texto o en una serie de numeros
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        //retorna los valores que se han ingresado
        //verifica tambien si alguno de los campos esta vacio
        console.log(Object.values(email).includes(''));
    }
});