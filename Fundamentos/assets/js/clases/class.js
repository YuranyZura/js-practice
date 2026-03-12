class Persona {
  static _conteo = 0; // static no se puede acceder desde una instancia, solo desde la clase
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Hola a todos , soy un metodo estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase",
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // GET Y SET -- metodo para obtener y modificar propiedades

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase(); // set no puede tener el mismo nombre de la propiedad
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman",
);

console.log(spiderman);

spiderman.miFrase();

spiderman.setComidaFavorita = "pastel de cereza de tia May";
spiderman.nemesis = "Duende verde";

// console.log(spiderman);

// Persona._conteo = 2;
console.log("Conteo statico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

// definir propiedades estaticas fuera de la clase

Persona.propiedadExterna = "Hola mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);
