/*
 * Escribe una función que reciba un array de objetos con propiedades nombre y edad, y devuelva un nuevo array con los nombres de
 * las personas mayores de 18 años, ordenado alfabéticamente.
 */

//TODO: Añadir el ordenado alfabeticamente
//TODO: Se puede reducir a un map y un push
const arrMayoresEdad = () => {
  const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Pedro", edad: 18 },
    { nombre: "Carlos", edad: 21 },
    { nombre: "Luis", edad: 19 },
    { nombre: "Maria", edad: 22 },
    { nombre: "Jose", edad: 17 },
    { nombre: "Yulio", edad: 12 },
    { nombre: "Maria", edad: 14 },
    { nombre: "Luis", edad: 11 },
  ];
  const personasMayores = [];

  for (const persona of personas) {
    const nombrePersona = persona.nombre;
    const edadPersona = persona.edad;

    if (persona.edad < 18) {
      continue;
    } else {
      console.log(`Personas mayores de edad: ${nombrePersona}, ${edadPersona}`);
      personasMayores.push({ nombre: nombrePersona, edad: edadPersona });
      personasMayores.sort();
    }
  }
  console.log(personasMayores);
};

arrMayoresEdad();
