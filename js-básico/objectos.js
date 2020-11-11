var miAuto = {
    marca: "Toyota", 
    modelo: "Corola", 
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);//this hace referencia a la variable del objecto // Hace referencia a su padre 
    }
}; 