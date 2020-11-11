function auto(marca, modelo, annio){
this.marca= marca;
this.modelo = modelo;
this.annio = annio; 
}

//Metodo para crear varios objetos 
var autos = [];
for(let i=0; i<3; i++){
    var marca = prompt("Ingresa la marca");
    var modelo = prompt("Ingresa el modelo");
    var annio = prompt("Ingresa el año");
    autos.push(new auto (marca, modelo, annio)); //empujo los datos al array
}

for (let i =0; i < autos.length; i++){
    console.log(autos[i]);
}