
// const arr = new array (10); Creando 10 elementos vacios

let videojuegos = [ 'mario', 'Zelda' , 'carritos' ];
console.log( videojuegos);
console.log ( videojuegos [1]);

let arregloCosas = [
    true,
    123,
    'hola',
    1 + 2,
    function() {},
    () => {},
    {a:1},
    ['x', 'Megaman' , 'zero']
]

console.log (arregloCosas);

console.log (arregloCosas [0]);
console.log (arregloCosas [2]);
console.log (arregloCosas [7] [2]);

let juegos = [ 'zelda' , 'Mario' , 'Hulk' , 'duolingo'];
console.log('Largo:' ,juegos.length);
let primero = juegos[2-2];
let ultimo = juegos [ juegos.length - 1];
console.log (primero, ultimo);

// juegos.forEach () Ejecutar cada elementod el arreglo

juegos.forEach ((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero'); //Insertar un nuevo elemento al final del arreglo
console.log(nuevaLongitud, juegos);

juegos.unshift('Fire'); //Insertar un nuevo elemento al inicio del arreglo
console.log(nuevaLongitud, juegos);

juegos.pop(); // Elimina el ultimo elemento del arreglo
console.log(juegos);

let pos = 1;
juegos.splice(pos, 2); // Elimina 2 elementos a partir de la posicion 1

let juegosBorrados = juegos.splice(pos, 2); // Elimina 2 elementos a partir de la posicion 1 y los guarda en una variable
console.log({juegos, juegosBorrados});

let zeldaIndex = juegos.indexOf('zelda'); //CaseSesitive 
console.log( {zeldaIndex });

