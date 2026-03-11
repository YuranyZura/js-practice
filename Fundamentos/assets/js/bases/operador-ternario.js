
/* Dias de la semana abrimos a las 11
pero los fines de semana abrimos a las 9*/

//Entra a un sitio web para consultar si está abierto hoy... 
const dia = 0;
const horaActual = 10;
let horaApertura;
let mensaje; // Esta abierto , rtda verrado, hoy abrimos a las xx

if (dia ===0 || dia === 6){
    console.log('Fin de semana');
}else{
    console.log('Dia de semana');
    horaApertura = 11; }

if (horaActual >= horaApertura){
    mensaje = 'Eta abierto';

}else{
    mensaje =  `Esta cerrado , hoy abrimos a las ${horaApertura}`;
}
console.log({horaApertura, mensaje});

// Operador terciario

horaApertura = ([0,6].includes( dia )) ? 9 : 11;

