//Local Storage pertenece a la API de JS y solo almacena strings

//agregar elementos al local storage (setItem)
//se componen por una llave y un valor

//la llave es como vas a obtener esos valores o como vas a hacer referencia a ellos (izquierda)
//el valor es lo que puede cambiar (derecha)
localStorage.setItem('nombre', 'Andrea');

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300
}

//convierte el objeto en un string
const productoString = JSON.stringify(producto);
console.log(productoString);

//lo agregamos al local storage
localStorage.setItem('producto',productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);

//local storage los datos persisten mas, ya que se puede apagar la computadora y los datos se mantienen
//session storage, cuando se cierra el navegador, se pierden esos datos.