function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

//creando un nuevo prototype (los prototipes son funciones o metodos exclusivos de un objeto)
//se utiliza un function y no un array function porque function busca las propiedades en el mismo objeto
//mientras que el array function busca en la ventana global y marca undefined
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
    return `Su saldo actual es de ${this.saldo}`;
}

//Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
console.log(pedro.retiraSaldo(2000));
console.log(pedro.nombreClienteSaldo());
console.log(pedro);

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

const vmc = new Empresa('VMC', 1800, 'Electromecanica');
console.log(vmc);