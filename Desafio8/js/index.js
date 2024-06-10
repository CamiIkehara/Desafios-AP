const productos = ['Zapatillas', 'Pantalon', 'Camisa', 'Camiseta', 'Campera']

for(let prod of productos){
    let h2 = document.createElement("h2");
    h2.innerHTML = `<p>Nombre del producto: <span style="color: darkRed"> ${prod}</span> </p>`
    document.body.appendChild(h2)
}