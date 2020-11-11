var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function suludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

for(var i =0; i < estudiantes.length ; i++){
    suludarEstudiantes(estudiantes[i]);
}


//estudiante : singular una sola persona  
//estudiantes: Plural el Array mas de una persona

for(var estudiante of estudiantes){
    suludarEstudiantes(estudiante);
}


while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    suludarEstudiantes(estudiante);
}