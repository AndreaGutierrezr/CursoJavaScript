//class declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //no requieren de una instancia para mostrarlas
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

//instanciar la clase
const juan = new Cliente('Juan', 400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());

//class expretion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2);
console.log(juan2.mostrarInformacion());