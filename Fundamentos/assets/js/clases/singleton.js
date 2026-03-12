
// Singleton instancia unica de mi clase
class Singleton {

    static instancia; // estos campos son opcionales
    nombre = '';

    constructor (nombre = '' ){
        console.log(Singleton.instancia);
    }
}

const instancia1 = new Singleton('Ironman');