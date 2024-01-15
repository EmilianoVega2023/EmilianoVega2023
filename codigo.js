// Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4
let unidades = 0;
let decenas = 0;
for(i = 0; i = 14;i++){
    unidades = unidades + 1;
    if(unidades = 9){
        decenas = decenas + 1;
        unidades = 0;
    }
    console.log(`${decenas} : ${unidades}`);
}
