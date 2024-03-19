function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

//creando un nuevo prototype
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


function Persona(nombre, saldo, telefono){
    //Herencia (heredamos el constructor)
    Cliente.call(this, nombre,saldo);
    this.telefono = telefono
}

//heredar funciones (se hereda antes de instanciar)
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

//creamos un prototype para persona
Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es: ${this.telefono}`;
}

//instanciarlo 
const andrea = new Persona('Andrea', 3000, 2211360201);
console.log(andrea);
console.log(andrea.nombreClienteSaldo());
console.log(andrea.mostrarTelefono());