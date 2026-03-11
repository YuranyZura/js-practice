
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(false);

// && - and ; OR - o al menos una condicio true debe traer true , 
console.log('OR ');
console.log(true || false);
console.log(false || false);

console.log( true && true && true && false ); //false

// Asiganciones
const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo';

console.log({a1, a2});

