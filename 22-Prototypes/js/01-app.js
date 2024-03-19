//object literal
const cliente = {
    nombre: 'Andrea',
    saldo: 500
}
console.log(cliente);
console.log(typeof cliente);

//objeto reutilizable
//constructor del objeto (Object constuctor)
function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

const juan = new Cliente('Andrea', 1800);
console.log(juan);
console.log(typeof juan);