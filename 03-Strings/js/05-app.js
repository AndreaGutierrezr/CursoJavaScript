const pProducto = 'Monitor 20 pulgadas';
console.log(pProducto);
//Reemplazar
console.log(pProducto.replace("pulgadas", '"'));
console.log(pProducto.replace('Monitor','Monitor Curvo'));

//Extraer una parte de la cadena de texto
console.log(pProducto.slice(0,10));//indicamos donde empieza y donde finaliza el corte
console.log(pProducto.slice(8));//hará el corte desde la posición indicada hasta el final
console.log(pProducto.slice(2,1)); //si el primer numero es mayor al segundo, este metodo no hará nada
//Alternativa a slice
console.log(pProducto.substring(0,10));//indicamos donde empieza y donde finaliza el corte
console.log(pProducto.substring(2,1));//intercambia los valores y realiza el corte

const usuario = "Andrea";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0)); //corta la letra de la posicion indicada