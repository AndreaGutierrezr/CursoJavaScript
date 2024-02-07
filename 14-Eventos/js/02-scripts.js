//eventos con el mouse

const nav = document.querySelector('.navegacion');

//registrar un evento
// nav.addEventListener('click', () => {
//     console.log('click en nav');
// });

//mouse se acerca al elemento
nav.addEventListener('mouseenter', () => {
    console.log('entrando en el nav');
    nav.style.backgroundColor = 'transparent';
});

//saliendo del elemento
nav.addEventListener('mouseout', () => {
    console.log('saliendo del nav');
    nav.style.backgroundColor = 'white';
});


//similar a un click
nav.addEventListener('mousedown', () => {
    console.log('mousedown');
});

//das clic y sueltas el mouse
nav.addEventListener('mouseup', () => {
    console.log('mouseup');
});

//doble click
nav.addEventListener('dblclick', () => {
    console.log('dblclick');
});