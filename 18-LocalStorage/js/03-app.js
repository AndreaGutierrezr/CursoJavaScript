//eliminar elementos del local storage
localStorage.removeItem('nombre');


//actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses') );
console.log(mesesArray);

//agregar un nuevo mes
mesesArray.push('Abril');
console.log(mesesArray);
//lo volvemos a agregar para que se "actualice", reescribiendo el valor
localStorage.setItem('meses', JSON.stringify(mesesArray));


//limpia todo el local storage
localStorage.clear();