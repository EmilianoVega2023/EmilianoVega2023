//En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 5 nombres.

// Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 al final de lst2, y luego el primero de la lst2 al final de lst1.

// Para ver que funciona escribe los arrays antes y después de usar esta función.

// let lst1 = ["juan","pedro","emilinao","kaka","ramon"];
// let lst2 = ["adrian","carlos","rodrigo","ulises","rayo"];

// function rotar(lst1,lst2){
//    var element = lst1.shift();
//    lst2[5] = element;
//    var element2 = lst2.shift();
//    lst1[4] = element2;
//    console.log(lst1,lst2);
// }
// rotar(lst1,lst2);


function rotar(lst1, lst2){
    let persona;
   persona = lst1.shift();
   lst2.push(persona);
   persona= lst2.shift();
   lst1.push(persona);
}
let ocupados = ['Pedro', 'Luisa', 'Juan', 'Ana'];
let libres = ['Marina', 'Jose', 'Alba', 'Felipe'];
console.log("Inicio ", ocupados, libres);
rotar(ocupados, libres);
console.log("Final ", ocupados, libres);