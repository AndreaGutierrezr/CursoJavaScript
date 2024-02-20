//contenedor para el resultado
const resultado = document.querySelector('#resultado');
//variables
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la búsqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo  : '',
    puertas : '',
    transmision : '',
    color : '',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
});

//Event listener para los select de búsqueda
//change es para cuando el valor del select cambie

//para marca
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

//para año 
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value); //convertimos el año de tipo cadena a tipo entero

    filtrarAuto();
});

//para minimo
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});


//para maximo
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

//para puertas
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});
    
//para transmision
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

//para color
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});


//funciones
function mostrarAutos(autos){
    limpiarHTML(); //elimina el html previo
    autos.forEach((auto) => {
        //destructuring 
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}

//funcion limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones de año al select
    }
}

//funcion que filtra en base a la búsqueda
//funcion de alto nivel, es decir, una función, que toma otra funcion
function filtrarAuto(){
    //se pueden encadenar los array methods
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda.';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    //verificamos que esa parte del objeto no este vacia
    if(marca){
        return auto.marca === marca;
    }
    return auto; //ayuda a que no se pierda la referencia de los valores originales, trae todos de regreso
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}