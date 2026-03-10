
// function crearPersona (nombre, apellido) {
//     return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona( 'Ary' , 'Zura' );
console.log(persona);

function imprimeArguments () {
    console.log (arguments);
}

const imprimeArgumentos = (edad , args) => {
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos (10, true, false, 'Ary' , 'Hola');
console.log({casado, vivo, nombre, saludo});

const persona2 = crearPersona2 ('Yurany' , 'Zura');
console.log({nuevoApellido});

