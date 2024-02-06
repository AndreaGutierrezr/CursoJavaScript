let elemento; 
elemento = document;
elemento = document.all; //Todo el documento
elemento = document.head;
elemento = document.body;
elemento = document.domain; //dominio
elemento = document.forms; //formularios
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].className; //lo regresa como string
elemento = document.links[4].classList; //lo regresa como un arreglo (DOMTokenList)
elemento = document.images; //imagenes
elemento = document.scripts;
console.log(elemento);