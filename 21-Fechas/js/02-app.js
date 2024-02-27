const diaHoy = new Date();

//utilizando moment
//fechas en español
moment.locale('es');
console.log(moment().format('MMMM Do YYYY h:mm:ss a')); //formato para fecha y hora
console.log(moment().format('LLLL', diaHoy));
//operaciones
//agregarle 3 días
console.log(moment().add(3, 'days').calendar());