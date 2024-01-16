// Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

let datos = [];
let n = prompt("Ingrese el valor de n:");

n = parseInt(n);

if (isNaN(n) || n < 0) {
  alert("Por favor, ingrese un número válido y positivo.");
} else {
  for (let i = 0; i <= n; i++) {
    datos.push(i);
  }
  console.log("Array 'datos':", datos);
}
