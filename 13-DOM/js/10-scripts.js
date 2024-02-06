//crear nuevos elementos
const enlace = document.createElement('a');
//agregandole el texto
enlace.textContent = 'Nuevo Enlace';
//añadiendo href
enlace.href = '/nuevo-enlace';
//añadiendo target
enlace.target = '_blank';
//atributo personalizado
enlace.setAttribute('data-enlace', 'nuevo-enlace');
//añadiendo una clase
enlace.classList.add('nueva-clase');
//añadiendo eventos
enlace.onclick = miFuncion;

// console.log(enlace);

//mostrando el elemento

//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//añadiendo el enlace (coloca al final)
navegacion.appendChild(enlace);
//añadiendolo antes de un elemento en especifico
navegacion.insertBefore(enlace, navegacion.children[2]);

function miFuncion(){
    alert('diste click');
}


//creando un card
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.append(parrafo1);
info.append(parrafo2);
info.append(parrafo3);

//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
//texto alternativo
imagen.alt = "texto alternativo";

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);
//asignar info
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.contenedor-cards');
contenedor.appendChild(card);

