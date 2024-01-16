const ejemplo = [
    "intro a js",
    "variables y tipos",
    "operadores aritmeticos",
    "concatenacion de cadenas",
    "funciones",
];

for(let i = 0; i < ejemplo.length; i++){
    console.log(ejemplo[i]);
}

for(const leccion of ejemplo){
    console.log(leccion);
}

for(const leccion in ejemplo){
    console.log(leccion);
}