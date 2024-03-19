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

//Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //reescribe el metodo y utiliza el metodo del hijo
    static bienvenida(){
        return `Bienvenido al cajero de Empresas`;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);

const empresa = new Empresa('Codigo con Juan', 500, 1234567890, 'Aprendizaje en linea');
console.log(empresa);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
