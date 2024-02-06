const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    mostrarOcultarFooter();
});

function mostrarOcultarFooter(){
    //verificamos si cuenta con la clase activo
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        // this.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    } else{
        //this hace referencia a lo que mando llamar a la función, en este caso btnFlotante
        footer.classList.add('activo');
        // this.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Cerrar';
    }
}