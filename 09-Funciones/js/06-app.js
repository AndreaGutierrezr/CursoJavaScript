//parametros por default

function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
saludar('Andrea');
saludar('Andrea', 'Gutierrez');