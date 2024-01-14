
var arrayAleatorio = [];

for (var i = 0; i < 10; i++) {
  var numeroAleatorio = Math.random()*10;
  arrayAleatorio.push(arrayAleatoriorrayAleatorio);
  arrayAleatoriorrayAleatorio = Math.floor(numeroAleatorio);
}
console.log(arrayAleatorio);
 
var arrayPar = [];
var arrayImpar = [];



function par(arrayAleatorio){
   if((arrayAleatorio[0] % 2)){
      arrayAleatorio[0] = arrayPar
   }else{
      arrayImpar.push(arrayAleatorio[0]);

   }
}
arrayAleatorio.forEach(function(elemento) {
  console.log(elemento);
});
var arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayPares = arrayOriginal.filter(function(elemento) {
  return elemento % 2 === 0; // Filtra los números pares
});

var arrayImpares = arrayOriginal.filter(function(elemento) {
  return elemento % 2 !== 0; // Filtra los números impares
});

console.log("Array de pares:", arrayPares);
console.log("Array de impares:", arrayImpares);





