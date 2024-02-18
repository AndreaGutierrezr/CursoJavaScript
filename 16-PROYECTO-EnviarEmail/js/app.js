//se ejecuta una vez que todo el html haya sido descargado
document.addEventListener('DOMContentLoaded', function(){
    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }

    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#cc');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    
    //asignar eventos
    //esta función se ejecuta cuando nos salimos del input en el que estamos escribiendo (más lento)
    // inputEmail.addEventListener('blur', validar);
    // inputAsunto.addEventListener('blur', validar);
    // inputMensaje.addEventListener('blur', validar);

    //lo ejecuta un poco mas en tiempo real (más rapido)
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault(); //previene su accion por default, en este caso, resetear el formulario
        resetFormulario();
    });

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        console.log(email);
        setTimeout(() => {
            //despues de 3 segundos (milisegundos)
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
            resetFormulario();
            //crear una alerta
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Email enviado correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e){
        //trim elimina espacios en blanco
        if(e.target.value.trim() === '' && e.target.id !== 'cc'){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''; //reiniciamos las propiedades de los objetos
            comprobarEmail();
            return; //detiene la ejecución del codigo si se cumple con la condición
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = ''; //reiniciamos las propiedades de los objetos
            comprobarEmail();
            return;
        }

        if(e.target.id == 'cc' && e.target.value.trim() !== '' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = e.target.value.trim().toLowerCase();
            comprobarEmail();
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
        //toma los valores del objeto y los asigna a un arreglo
        //includes, verifica tambien si alguno de los campos esta vacio
        // console.log(Object.values(email).includes(''));

        // if(Object.values(email).includes('')){
        //     btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
        //     btnSubmit.disabled = true;
        //     return;
        // }
        //     btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
        //     btnSubmit.disabled = false;
        const objectEmail = [email.email, email.asunto, email.mensaje];
        if(email.cc.trim() !== ''){
            if((!Object.values(email).includes('') && !validarEmail(email.cc)) || Object.values(email).includes('')){
                btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
                btnSubmit.disabled = true;
                return;
            }
                btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
                btnSubmit.disabled = false;
        }else if(email.cc.trim() === ''){
            if(Object.values(objectEmail).includes('')){
                btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
                btnSubmit.disabled = true;
                return;
            }
                btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
                btnSubmit.disabled = false;
        }
    }

    function resetFormulario(){
        //reiniciar el objeto
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        limpiarAlerta(inputEmail.parentElement);
        limpiarAlerta(inputAsunto.parentElement);
        limpiarAlerta(inputCC.parentElement);
        limpiarAlerta(inputMensaje.parentElement);
        comprobarEmail();
    }
});