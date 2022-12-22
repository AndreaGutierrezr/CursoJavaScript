//Parametros en Arrow Functions
const aprendiendo = function(aprendiendo){
    console.log(`Aprendiendo ${aprendiendo}`);
}

aprendiendo('JavaScript');

// const aprendiendo2 = (aprendiendo) => `Aprendiendo ${aprendiendo} 2`;
//cuando solamente tenemos un parametro podemos omitir los parentesis
// const aprendiendo2 = aprendiendo => `Aprendiendo ${aprendiendo} 2`;
const aprendiendo2 = (aprendiendo, aprendiendo2) => `Aprendiendo ${aprendiendo} y ${aprendiendo2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));