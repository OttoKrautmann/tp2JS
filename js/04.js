let suma = 0;
do{
    numero = prompt("introduce numeros");
    if(Number(numero) == numero){
        numero= Number(numero);
        suma = suma + numero
    }else if(numero != undefined){
        alert(numero + " no es un numero")
    }
}while(numero != undefined);
document.write(suma)