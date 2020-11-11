//array de Objectos
var articulos = [
    {nombre: "bici", costo: 3000}, 
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 3200},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

//el parametro es cada elemento del array que recorro

var articulosFiltrados = articulos.filter(function(articulo){    
     return articulo.costo <= 500
});


//articlo : singular, es cada uno los elementos del array 
//se crea una funcion para cada elemento

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre 
});



//other example:
let ns = [1,2,3,4,5];
let nsx2 = ns.map(n => n * 2);



//other Example
//Declaremos un array de números
var numeros = [1,2,3,4,5]

//Creemos un nuevo array aplicando una función a cada número dentro del array numeros
var dobles = numeros.map(function(numero){
  return numero * 2
})

console.log(numeros)
console.log(dobles)
//Resultado en la consola
//[1,2,3,4,5]
//[2,4,6,8,10]



var tasks = [
    {'name': 'Write for Envato Tuts+','duration':120},
    {'name':'Work out','duration':60},
    {'name':'Procrastinate on Duolingo','duration':240}
  ];


var task_names = [];

//nombre del vector 
tasks.forEach(function (task) {
    //nombre del nuevo vector
    task_names.push(task.name);
     
});