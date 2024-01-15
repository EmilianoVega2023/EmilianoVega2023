//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
const usuario = parseInt(prompt("Digite su numero: "));
let array2 = [];


for(let i = 0;i < usuario;i++){
    if (i % 2 == 0){
        let num = array2[i] = i + 1;
        console.log(`${num} `);
        }
}
