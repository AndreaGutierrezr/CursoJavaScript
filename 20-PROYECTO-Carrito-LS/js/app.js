//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //muestra los cursos del local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    //vacia el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo
        limpiarHTML();
    });
}

//funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        //accedemos a todo el div que tiene el contenido del curso
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//elimina un curso del carrito
function eliminarCurso(e){
    // console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const idCurso = e.target.getAttribute('data-id');

        //elimina del arreglo articulosCarrito por el data-ida
        articulosCarrito = articulosCarrito.filter((curso) => {
            return curso.id !== idCurso;
        });

        carritoHTML(); //iterar sobre el carrito y mostrar su html
    }
}


//lee el contenido del HTLM al que le dimos click y extrae la informacion del curso
function leerDatosCurso(cursoSeleccionado){
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        image: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( (curso) => {
        return infoCurso.id === curso.id;
    });

    if(existe){
        //actualizamos la cantidad

        const cursos = articulosCarrito.map((curso) => {
            if(infoCurso.id === curso.id){
                //retorna el objeto con su cantidad actualizada
                curso.cantidad++;
                return curso;
            }else{
                //si no encuentra duplicado regresa el objeto tal y como esta
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }else{
        //agregamos el curso al carrito

        //arregla elementos al arreglo de carrito
        //se realiza una copia del carrito con los elementos anteriores y por último se agrega el elemento actual o el elemento que se va a agregar
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar el html para evitar duplicados de informacion dentro del carrito
    limpiarHTML();


    //recorre el carrito y genera el html
    articulosCarrito.forEach( (curso) => {
        const {image, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> 
                <img src="${image}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
    //agregar carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    // contenedorCarrito.innerHTML = '';


    //forma mas rapida
    //valida si el contenedor de carrito contiene al menos un elemento
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}