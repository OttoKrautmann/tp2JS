let numero = parseInt(prompt("ingrese su dni"));
resto = numero % 23;
if (Number(numero) == numero) {
  if (numero > 0 && numero <= 99999999) {
    switch (resto) {
      case 0:
        alert("El numero " + numero + " le corresponde la letra T");
        break;
      case 1:
        alert("El numero " + numero + " le corresponde la letra R");
        break;
      case 2:
        alert("El numero " + numero + " le corresponde la letra W");
        break;
      case 3:
        alert("El numero " + numero + " le corresponde la letra A");
        break;
      case 4:
        alert("El numero " + numero + " le corresponde la letra G");
        break;
      case 5:
        alert("El numero " + numero + " le corresponde la letra M");
        break;
      case 6:
        alert("El numero " + numero + " le corresponde la letra Y");
        break;
      case 7:
        alert("El numero " + numero + " le corresponde la letra F");
        break;
      case 8:
        alert("El numero " + numero + " le corresponde la letra P");
        break;
      case 9:
        alert("El numero " + numero + " le corresponde la letra D");
        break;
      case 10:
        alert("El numero " + numero + " le corresponde la letra X");
        break;
      case 11:
        alert("El numero " + numero + " le corresponde la letra B");
        break;
      case 12:
        alert("El numero " + numero + " le corresponde la letra N");
        break;
      case 13:
        alert("El numero " + numero + " le corresponde la letra J");
        break;
      case 14:
        alert("El numero " + numero + " le corresponde la letra Z");
        break;
      case 15:
        alert("El numero " + numero + " le corresponde la letra S");
        break;
      case 16:
        alert("El numero " + numero + " le corresponde la letra Q");
        break;
      case 17:
        alert("El numero " + numero + " le corresponde la letra V");
        break;
      case 18:
        alert("El numero " + numero + " le corresponde la letra H");
        break;
      case 19:
        alert("El numero " + numero + " le corresponde la letra L");
        break;
      case 20:
        alert("El numero " + numero + " le corresponde la letra C");
        break;
      case 21:
        alert("El numero " + numero + " le corresponde la letra K");
        break;
      case 22:
        alert("El numero " + numero + " le corresponde la letra E");
        break;
      default:
        alert("numero erroneo");
    }
  } else {
    alert("no es un numero valido");
  }
}else{
    alert("no es un numero")
}

