const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre ${this.nombre} - tengo ${this.edad} años.`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 25,
  imprimir() {
    console.log(`Nombre ${this.nombre} - tengo ${this.edad} años.`);
  },
};

const juana = {
  nombre: "Juana",
  edad: 40,
  imprimir() {
    console.log(`Nombre ${this.nombre} - tengo ${this.edad} años.`);
  },
};

fher.imprimir();

// Implementar objetos para que tengan el mismo tipado

function Persona(nombre, edad) {
  console.log("se ejecutó esta línea");

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre ${this.nombre} - tengo ${this.edad} años.`);
  };
}

// Crear nuevas instancias de Persona
const maria = new Persona("Maria", 26);
const juana2 = new Persona("Juana", 40);

console.log(maria);
console.log(juana2);

maria.imprimir();
juana2.imprimir();
