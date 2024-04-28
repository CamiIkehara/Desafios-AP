let producto1 = "lapiceras";
let precioU = 1000;

alert ("Hola, estas por comprar un producto que es: "+ producto1 +" y su precio es de: "+ precioU)
let cantidadDeseada = parseInt(prompt ("Ingrese la cantidad de " + producto1 + " que quiere comprar: "))
let costoTotal = precioU * cantidadDeseada

if(cantidadDeseada >= 5){
    costoTotal = costoTotal * 0.9
}


Swal.fire(`El costo total de ${cantidadDeseada} ${producto1} es: $${costoTotal}`);