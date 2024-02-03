//las funciones son una serie de procedimientos o instrucciones

//llamar a la función
//funciona antes de declararse
sumar();
//declaración de función
function sumar(){
    //cuerpo de la función
    console.log(2+2);
}

//no funciona antes de declararse
sumar2();
//expresión de función (Function Expression)
const sumar2 = function(){
    console.log(3+3);
}

//JS se ejecuta en dos etapas (creación y ejecución (Hoisting))