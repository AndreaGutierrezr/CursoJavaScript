//funciones en objetos
const producto = {
    //para asignar el valor se utilizan los dos puntos
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    mostrarInfo: function(){
        //la palabra this se refiere a los valores que se encuentran dentro del mimo objeto
        console.log(`El producto: ${producto.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();