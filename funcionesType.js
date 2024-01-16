//FUNCION CLASICA 0 HOSTING

function saludar(nombre){
    return `hola` + nombre;
}

console.log(saludar(`David`));

//FUNCION ANONIMA - NO HOSTING

let saludar2 = function(nombre){
    return `Saludos` + nombre;
}

console.log(saludar2(`David`));

//FUNCIONES FLECHA () => {}

let Saludos = (nombre) => {`Saludos ` + nombre};
