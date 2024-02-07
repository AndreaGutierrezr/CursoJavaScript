//event bubbling, presionas en un elemento y se disparan los otros eventos, llevando a resultados no esperados

const carDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

carDiv.addEventListener('click', (e) => {
    e.stopPropagation(); //detiene la propagacion del evento, evitando el event bubbling
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

tituloDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});