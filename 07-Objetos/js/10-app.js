const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//unir objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
//los tres puntos significan copia
const resultado2 = {
    ...producto,
    ...medidas
}
console.log(resultado2);