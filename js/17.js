let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("introduce un texto");
let textomin = texto.toLowerCase();
let posicion = 0;
let parar = false;
for (i = 0; i < textomin.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] == textomin.charAt(i)) {
      posicion = i + 1;
      parar = true;
      break;
    }
  }
  if (parar) {
    break;
  }
}
document.write("La primera vocal esta en la posicion " + posicion)
