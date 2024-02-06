const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre','Diciembre'];


//unir arreglos
//Los une de acuerdo al orden en el que se fueron declarando
const resultado = meses.concat(meses3,meses2, 'otro mes');
console.log(resultado);


//spread operator
//se ponen 3 puntos suspensivos antes solamente cuando es un arreglo
//los une de acuerdo al orden en el que se encuentran
const resultado2 = [...meses,...meses2,...meses3, 'otro mes'];
console.log(resultado2);