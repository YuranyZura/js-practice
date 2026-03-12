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

class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = 'Los Avengers';
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman",
);

console.log(spiderman);
spiderman.quienSoy();
