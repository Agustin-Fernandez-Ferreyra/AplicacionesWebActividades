
let numeros = [];
for (let i = 0; i < 5; i++) {
    let entrada = prompt(`[Punto 1.a] Ingresa el número ${i + 1} de 5:`);
    numeros.push(Number(entrada));
}
console.log("Arreglo de 5 números:", numeros);


let numerosImpares = [];
for (let i = 0; i < 5; i++) {
    let entrada = prompt(`[Punto 1.d] Ingresa el número ${i + 1} de 5 (para filtrar impares):`);
    let numero = Number(entrada);
    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}
console.log("Arreglo de números impares:", numerosImpares);


let frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, indice, arr) => {
    arr[indice] = fruta.toUpperCase();
});
console.log("Frutas en mayúsculas (forEach):", frutas);


let frutasOriginales = ["pera", "manzana", "banana", "durazno"];
let frutasMayusculas = frutasOriginales.map(fruta => fruta.toUpperCase());
console.log("Frutas originales:", frutasOriginales);
console.log("Frutas en mayúsculas (map):", frutasMayusculas);


let frutasConNa = frutasOriginales.filter(fruta => fruta.includes("na"));
console.log("Frutas que contienen 'na':", frutasConNa);



let productoIndumentaria = {
    nombre: "Remera Básica",
    precio: 15000,
    stock: 8,
    talles: ["s", "m", "l"]
};
console.log("Objeto individual:", productoIndumentaria);


let productos = [
    { nombre: "Remera Básica", precio: 15000, stock: 3, talles: ["s", "m", "l"] },
    { nombre: "Pantalón Jean", precio: 35000, stock: 12, talles: ["s", "m", "l"] },
    { nombre: "Buzo Oversize", precio: 45000, stock: 4, talles: ["s", "m", "l"] },
    { nombre: "Campera de Cuero", precio: 80000, stock: 15, talles: ["s", "m", "l"] }
];


console.log("--- Productos con stock menor a 5 ---");
productos.forEach(producto => {
    if (producto.stock < 5) {
        console.log(`Producto: ${producto.nombre} | Stock actual: ${producto.stock}`);
    }
});


let productosConDescuento = productos.map(producto => {
    return {
        ...producto, 
        precio: producto.precio * 0.9 
    };
});
console.log("--- Productos con 10% de descuento ---", productosConDescuento);


let productosStockAlto = productos.filter(producto => producto.stock > 10);
console.log("--- Productos con stock mayor a 10 ---", productosStockAlto);