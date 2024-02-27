const diaHoy = new Date(); //las fechas son objetos
//se le pueden pasar parametros
//const diaHoy2 = new Date('1-5-2000');
const diaHoy2 = new Date('January 5 2000');
console.log(diaHoy2);
let valor;
valor = diaHoy;
//metodos para el objeto de fechas
valor =diaHoy.getFullYear(); //nos devuelve el año actual
valor = diaHoy.getMonth(); //nos devuelve el mes en el que estamos (inicia en 0)
valor = diaHoy.getMinutes(); //nos devuelve los minutos en que estamos
valor = diaHoy.getHours(); //nos devuelve las horas en que estamos
valor = diaHoy.getTime(); //nos devuelve los milisegundos a partir de 1 enero de 1970 hasta la fecha

//get sirve para extraer el valor
//set sirve para modificar el valor del objeto de fechas
console.log(valor);