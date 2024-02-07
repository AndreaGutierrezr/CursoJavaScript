//prevenir event bubbling con delegation

const carDiv = document.querySelector('.card');

carDiv.addEventListener('click', (e) => {
    // console.log(e.target); //saber a que elemento le estamos dando click
    // console.log(e.target.classList); //nos dice las clases del elemento al que le estamos dando click

    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('diste click en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('diste click en card');
    }
});