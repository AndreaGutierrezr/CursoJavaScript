const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//acceder al texto
console.log(encabezado.innerText); //si en el css visibility:hidden; no lo va a encontrar
console.log(encabezado.textContent); //si lo va a encontrar
console.log(encabezado.innerHTML); //también devuelve el codigo HTML

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);


const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img');
console.log(imagen);

imagen.src = 'img/hacer2.jpg';