// const usuario = parseInt(prompt("Digite su Numero: "));


// function tablas(usuario){
  
// for(let i = 1 ; i <= 10; i++){
//    let multiplicacion = i * usuario
//   console.log(` ${usuario} x ${i} = ${multiplicacion} </br>`);
//   document.write(` ${usuario} x ${i} = ${multiplicacion} </br>`);
// }
// }
// tablas(usuario);


let base, contador, prefijjo, producto, msg='';
base = parseInt(prompt("Tabla del..."));
prefijo = base + " X ";
for (contador = 1; contador <= 10; contador++)
{
producto = base*contador;
msg +=  prefijo + contador + " = " + producto + "\n";
}
alert("Tabla del "+base +"\n"+msg)