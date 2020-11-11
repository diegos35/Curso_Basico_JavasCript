//array de Objectos
var articulos = [
    {nombre: "bici", costo: 3000}, 
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 3200},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]


//---------------------------FIND-------------------------
//@param articulo que estamos buscando
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});


//----------------------------forEach-------------------------//
//@param articulo que estamos buscando
 articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//----------------------------Some-------------------------// 
//devuelve True o False
var articulosBaratos= articulos.some(function(articulo){
    return articulo.costo <= 700
});