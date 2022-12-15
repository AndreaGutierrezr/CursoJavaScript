const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion :{
        peso: '1kg',
        medida : '1m',
        fabricacion : {
            pais: 'México',
            ciudad : 'Puebla'
        }
    }
}

//Destructuring de objetos anidados
//En el caso de información, se repite porque en la primera esta creando la variable y en la 
//segunda solo estamos especificando la propiedad hasta la que queremos llegar
const {nombre, informacion, informacion:{fabricacion, fabricacion : {pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);