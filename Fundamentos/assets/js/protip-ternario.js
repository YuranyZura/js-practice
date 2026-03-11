

const elMayor = (a, b) => {
    return ( a > b ) ? a : b;
 }

const elMayor2 = (a,b) => (a > b) ? a: b;

console.log( elMayor(20, 15) );
console.log( elMayor2(20, 15) );

const tieneMembresia = (miembro) => (miembro)  ? '2 dolares ': ' 10 Dolares';

console.log (tieneMembresia(false));

// Funcion anonima autoinvocada

const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr.String',
    amigo ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')()
    elMayor(10 , 15)
];

console.log (amigoArr);

const nota = 95;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log ({ nota, grado });