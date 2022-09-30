const productoPrueba7 = 'Monitor 20 pulgadas ';

//Permite repetir una cadena de texto
const texto = ' en promoción'.repeat(3); //no existen puntos medios, el numero se redondea al primer digito
const texto2 = ' en promoción'.repeat(1.7);
console.log(texto);
console.log(texto2);
console.log(`${productoPrueba7} ${texto} !!!`);

//Dividir un string
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" ")); //le tenemos que pasar porque parte o que va a buscar en la cadena para divirla y crear diferentes partes

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));