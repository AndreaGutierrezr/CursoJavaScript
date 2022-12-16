const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
//Asignar valores a una variable
const {nombre} = producto;
console.log(nombre);


//Destructuring con arreglos
const numeros = [10,20,30,40,50];
// const [primero, segundo, tercero] = numeros;
const [ , , , cuarto] = numeros;
const [primero, segundo, ...tercero] = numeros;
console.log(tercero);