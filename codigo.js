//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
const N = parseInt(prompt("Digite su numero: "));
let valoresPares = [];
let datos = [];

function ejecucion(){
    
for(let i = 0;i > N;i+2){
    i = datos[i];
    if (datos[i] == undefined) {
        break;
        } else{
            valoresPares.push(datos[i]);
            }
}
}

ejecucion();
    
console.log(datos);

// if (i % 2 == 0){
//     const element = array2.push(i);
//     console.log(`${element}`)
//     console.log(i);
//     }
// }