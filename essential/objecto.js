const objeto = {};
console.log(objeto);
console.log(typeof objeto);

const persona = {
  nombre: ["Juan", "Sanchez"],
  edad: 24,
  sexo: "Masculino",
  intereses: ["Programacion", "Juegos"],
  bio: function () {
    console.log("Hola soy Juan Sanchez");
  },
  saludo: function () {
    console.log("Hola");
  },
};

let Persona = {
  nombre: {
    pila: "Juan",
    apellido: "Sanchez",
  },
};

console.log(Persona.nombre.pila);
console.log(Persona["nombre"]["pila"]);

console.log((persona.nombre[1] = "Santos"));

console.log(persona.nombre);
