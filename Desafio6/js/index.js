let producto = {
    Nombre: "Camiseta",
    Precio: 8000,
    cantidadDisponible: 50,
}

producto.Nombre = "Zapatillas";
producto.Categoria = "Calzado";
delete producto.cantidadDisponible;

console.log('El producto ' + producto.Nombre + ' se encuentra en la categoria ' + producto.Categoria + ', tiene un precio de $' + producto.Precio + ' y la cantidad disponible es de (agotado)') 