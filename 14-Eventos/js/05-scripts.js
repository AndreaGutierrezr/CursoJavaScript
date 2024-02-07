//eventos que suceden con el scroll del mouse
window.addEventListener('scroll', () => {
    // console.log('scrolling');

    //a cuantos pixeles se le ha hecho un scroll
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //a que distancia se encuentra un elemento

    if(ubicacion.top < 784){
        console.log('el elemento ya esta visible');
    }else{
        console.log('aun no, da mas scroll');
    }
});