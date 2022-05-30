let frase = prompt("ingrese un texto");
let numeroDeCaracter = frase.length;
let caracter, i;
for(i=0; i<numeroDeCaracter; i++){
    caracter= frase.charAt(i);
    if(i == numeroDeCaracter - 1){
        document.write(caracter)
    }else{
        document.write(caracter + "-");
    }
}