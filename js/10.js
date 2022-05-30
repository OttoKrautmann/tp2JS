let i, j;
let filas = Number(prompt("ingrese el numero de filas"));
let columnas = Number(prompt("ingrese el numero de columnas"));
let resultado = filas * columnas;
document.write("<table border>");
for (i= 0; i<filas; i++){
    document.write("<tr>");
    for (j=0; j<columnas; j++){
        document.write("<td>");
        document.write(resultado);
        resultado--;
        document.write("</td>")
    }
    document.write("</tr>")
}
document.write("</table>")