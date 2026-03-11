
let a = 5;

if (a >= 10){
    console.log('A es mayor o igual a 10');
}else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // Crear instancias

console.log(hoy); 

let dia = hoy.getDay();
console.log({dia});

if ( dia === '2') { // = es de asignación , == confirmación valor sin importar el tipo de dato, === 
    console.log('Domingo');
}else{
    if( dia === '1') {
        console.log('Lunes');
    }else{
         console.log('No es lunes ni es domingo');
    }
}

console.log( 5 === '5' ); // regresa verdadero o falso dependiendo de lo que se espera

let dia2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log( dia2 );