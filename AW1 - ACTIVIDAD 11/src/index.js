
function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar(); 


function saludarPersona(nombre) {
    console.log(`¡Hola pepe, bienvenido!`);
}
saludarPersona("pepe"); 


function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let resultadoEdad = esMayorDeEdad(21);
console.log(`¿Es mayor de edad? ${resultadoEdad}`);

const esMayorDeEdadFlecha = (edad) => {
    return edad >= 18;
};
let resultadoEdadFlecha = esMayorDeEdadFlecha(16);
console.log(`[Flecha] ¿Es mayor de edad? ${resultadoEdadFlecha}`);

const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log(`El número ${num1} es menor que ${num2}`);
    } else if (num1 === num2) {
        console.log(`El número ${num1} es igual que ${num2}`);
    } else {
        console.log(`El número ${num1} es mayor que ${num2}`);
    }
};
console.log("--- Pruebas en Bucle (compararNumeros) ---");
let numeroFijo = 5;
for (let i = 1; i <= 10; i++) {
    compararNumeros(i, numeroFijo); 
}

const suma = (a, b) => {
    let resultado = a + b;
    console.log(`El resultado de la suma es`);
};

const resta = (a, b) => {
    let resultado = a - b;
    console.log(`El resultado de la resta es `);
};

const operacion = (num1, num2, callback) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        console.log("Debe ingresar solo números.");
        return; 
    }
    callback(num1, num2);
};

console.log("--- Pruebas de Operaciones con Callback ---");
operacion(10, 5, suma);       
operacion(10, 5, resta);      
operacion(10, "cinco", suma); 