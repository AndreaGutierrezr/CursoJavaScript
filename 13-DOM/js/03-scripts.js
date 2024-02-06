//seleccionar elementos por su id (solo se usa un id una vez por documento)
//selecciona el primero que encuentre, solo devuelve un elemento

const formulario = document.getElementById('formulario');
console.log(formulario);


//si no existe retorna un null
const noExiste = document.getElementById('no-existe');
console.log(noExiste);