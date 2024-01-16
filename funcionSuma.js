//funcion suma:

let num1 = parseFloat(prompt("digite el numero a sumar: "));
let num2 = parseFloat(prompt("digite el siguiente numero: "));
let suma2 = 0 
function suma(num1,num2){
    if(num1 && num2 == NaN){
        alert ("no ingreso numeros");
    }else{
        suma2= num1 + num2;
        document.write(`la suma de ${num1} y ${num2} es :
        <strong>${suma2}</strong>`);
    }
}

suma(num1,num2);

console.log("la suma es: ",suma);