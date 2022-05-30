let frase = prompt("introduce un texto");
let numeroDeCaracter = frase.length;
let i, caracter;
let final = "";
for(i=0; i<numeroDeCaracter; i++){
    caracter = frase.charAt(i);
    final = caracter + final;
}
document.write(final)