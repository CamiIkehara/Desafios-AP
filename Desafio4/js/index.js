let producto1 = "lapiceras";
let precioU = 1000;

alert ("Hola, estas por comprar un producto que es: "+ producto1 +" y su precio es de: "+ precioU);
let cantidadDeseada = parseInt(prompt ("Ingrese la cantidad de " + producto1 + " que quiere comprar: "));

function sumarProductos (precioU, cantidadDeseada){
    let totalGastado = precioU * cantidadDeseada;
    return totalGastado;
}

let compraTotal = sumarProductos(precioU, cantidadDeseada);
console.log("El total gastado es: $" + compraTotal);