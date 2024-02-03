//operador ternario
const autenticado = true;
const puedePagar = false;
console.log(autenticado ? 'Si esta autenticado' : 'No, no esta autenticado');
console.log(autenticado && puedePagar ? 'Si esta autenticado' : 'No, no esta autenticado');

//operador ternario anidado
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No no esta autenticado');