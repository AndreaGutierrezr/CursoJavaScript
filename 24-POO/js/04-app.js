//class declaration
// class Cliente{
//     //propiedad privada
//     #nombre;

//     constructor(nombre, saldo){
//         this.#nombre = nombre;
//         this.saldo = saldo;
//     }

//     mostrarInformacion(){
//         return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
//     }

//     //no requieren de una instancia para mostrarlas
//     static bienvenida(){
//         return `Bienvenido al cajero`;
//     }
// }


// const juan = new Cliente('Juan',200);
// console.log(juan);
// // console.log(juan.#nombre);
// console.log(juan.mostrarInformacion());

class Cliente{
    //propiedad privada
    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());