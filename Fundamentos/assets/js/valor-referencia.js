
let a = 200;
let b = a;
a = 30;

console.log ({a, b});

// Por referencia 

let zoe = { nombre: 'Zoe'};
let ary = { nombre: 'zoe' };
ary.nombre = 'ary';

console.log({zoe, ary});

// Arreglos

const frutas = [ 'Manzana', 'Pera', 'Melon', 'Piña'];

const otrasFrutas = frutas.slice(); // Crea una copia del arreglo frutas

otrasFrutas.push ('Mandarina');

console.table({frutas, otrasFrutas});





