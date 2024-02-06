//recorrer el DOM (TRAVERSING THE DOM)
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//acceder a los nodos
console.log(navegacion.childNodes); //los espacios en blanco (saltos de linea) son considerados elementos

//enlista elementos reales
console.log(navegacion.children);

//acceder a un elemento
console.log(navegacion.children[0]);

//etiqueta del nodo
console.log(navegacion.children[0].nodeName);

//Tipo de nodo
console.log(navegacion.children[0].nodeType);


const card = document.querySelector('.card');
console.log(card.children);
console.log(card.children[1]);
console.log(card.children[1].children);
console.log(card.children[1].children[1]);
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
console.log(card.children[1].children[1].textContent);
console.log(card.children);
console.log(card.children[0]);
card.children[0].src = 'img/hacer2.jpg';


//Traversing de hijo a padre
console.log(card.parentNode); //toma en cuenta espacioa en blanco
console.log(card.parentElement); //toma elementos validos
console.log(card.parentElement.parentElement); //podemos recorrer varios padres


//Seleccionar el siguiente elemento (hermanos)
console.log(card.nextElementSibling);

//seleccionar elemento previo
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);

//seleccionar primer elemento
console.log(navegacion.firstElementChild);

//seleccionar ultimo elemento
console.log(navegacion.lastElementChild);