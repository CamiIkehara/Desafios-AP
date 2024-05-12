console.log("El stock actual de lapiceras es de:")
const productos = ["lapicera", "lapicera", "lapicera", "lapicera", "lapicera"]

for(let i = 0; i < productos.length; i++){
    console.log("Lapicera " + (i+1));
}

console.log("Se vendio 1 lapicera, el nuevo stock es de:")

productos.pop();

for(let i = 0; i < productos.length; i++){
    console.log("Lapicera " + (i+1));
}
