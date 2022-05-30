let frase = prompt("ingrese un texto");
let numeroDeCaracter = frase.length;
frase = frase.toUpperCase();
let caracter, i;
let contador = 0;
for(i=0; i< numeroDeCaracter; i++){
    caracter = frase.charAt(i);
    if((caracter == "A") || (caracter == "E") || (caracter == "I") || (caracter == "O") || (caracter == "U")){
        contador++
    }
}
document.write("numero de vocales: " + contador);