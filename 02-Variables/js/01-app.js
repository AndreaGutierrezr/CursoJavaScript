//las variables en JS se pueden reasignar o sea que pueden cambiar su valor.
//Inicializar una variable con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);
//Las variables se pueden reasignar
producto = 'Monitor de 19 Pulgadas';
console.log(producto);
//JS es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
disponible = false;

//Inicializar múltiples variables
//Las variables no pueden iniciar con numeros
var categoria = 'Computadoras',
    marca = "Marca famosa",
    calificacion = 5;
