

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark IV'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    ultimaPelicula: 'Infinity War'
};

console.log (personaje);
console.log ('Nombre' , personaje.nombre);

// Acceder a las propiedades de un objeto

console.log('Nombre', personaje['nombre']);
console.log('Nombre', personaje.nombre);
console.log('Edad', personaje.edad);
console.log('Edad', personaje ['edad']);
console.log('coords', personaje ['coords']);
console.log('coord' , personaje.coords.lat);
console.log('trajes', personaje.trajes);
console.log('No.trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes [personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo' , personaje [x]);

delete personaje.edad;
console.log (personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;

Object.freeze (personaje);

personaje.dinero = 20000000000;
console.log(personaje);
personaje.casado = false;
console.log(personaje);


personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames (personaje);
console.log(propiedades);

const valores = Object.values(personaje);
console.log(valores);
