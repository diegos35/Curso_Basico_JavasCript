//Array es un estructura de datos o lista de datos tipo Objecto
var  frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas.forEach(Element=> console.log(Element)));

var masFrutas = frutas.push("Uvas"); //agrega al final

var ultimo = frutas.pop("Uvas"); //elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Patilla"); // agrega al inicio

var borrarFruta = frutas.shift("Platano"); //elimina el primer elemento

var posicion = frutas.indexOf("Cereza"); //trae la posicion del Elemento 



