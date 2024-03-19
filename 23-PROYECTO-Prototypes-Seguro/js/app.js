//constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realiza la cotizacion con los datos
//se utiliza function y no arrow function porque se tiene que acceder a los datos del objeto
Seguro.prototype.cotizarSeguro = function(){
    /*
        Americano 1.15
        Asiatico 1.05
        Europeo 1.35
    */
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case "1":
            cantidad = base * 1.15;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;
        default: 
        break;
    }

    //leer el año
    const diferencia = new Date().getFullYear() - this.year;
    //cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad)/100;
    /*
        Si el seguro es básico, se multiplica por un 30% mas
        Si el seguro es completo, se multiplica por un 50% mas
     */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI(){

}

//llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    const button = document.querySelector('#btnSend');
    if(tipo === 'error'){
        div.classList.add('error');
        button.classList.add('cursor-not-allowed', 'opacity-50');
        button.disabled = true;
    }else{
        div.classList.add('correcto');
        button.classList.add('opacity-50');
        button.disabled = true;
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');    
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
        button.classList.remove('cursor-not-allowed', 'opacity-50');
        button.disabled = false;
    }, 3000);
}

UI.prototype.mostrarResultado = (seguro, total) =>{
    //crear el resultado
    const div = document.createElement('div');
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch(marca){
        case "1":
            textoMarca = 'Americano';
            break;
        case "2":
            textoMarca = 'Asiatico';
            break;
        case "3":
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen:</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');

    //mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none'; //se borra el spinner
        resultadoDiv.appendChild(div); //se muestra el resultado
    },3000);
};

//instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //llena el select con los años
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //leer año seleccionado
    const year = document.querySelector('#year').value;
    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos, son obligatorios.', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando', 'exito');
    //ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }

    //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    //utilizar el prototype que va a cotizar
    const total = seguro.cotizarSeguro();
    ui.mostrarResultado(seguro, total);

}