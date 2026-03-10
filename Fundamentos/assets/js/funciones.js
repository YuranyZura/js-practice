
function saludar() { //Cuando tenga () esa es una funcion 
    console.log('Hola mundo');
}

saludar(); // Llamado de la funcion 

// const saludar2 = function () { // funcion anonima
//     console.log('Hola mundo');
// }

// saludar2 ();

// con argumentos
// const saludar2 = function( nombre ) {
//     console.log( 'Hola' + nombre);
// }

// saludar2( ' Yurany ', 25, false, 'Colombia');

function saludar3(nombre) {
    console.log(arguments);
    console.log('Hola' + nombre);
}

saludar3( ' Yurany' , 25, false, 'Colombia');

const saludarFlecha = () => {
    console.log ('Hola flecha')
}

saludarFlecha();

const saludarFlecha2 = (nombre ) => {
    console.log('Hola Zoe');
}

saludarFlecha2(' Zoe ');

function sumar(a , b) {
    return a + b;
}

console.log(sumar(2, 3));

// funcion de flecha -- se puede resumir a una sola linea

const sumarFlecha = (a , b) => {
    return a + b;
}

console.log(sumarFlecha(2, 3));

// asi se puede en 1 linea

const sumarFlecha3 = (a,b) => a + b;
console.log(sumarFlecha3 (2,3));

function getAleatorio () {
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2);


