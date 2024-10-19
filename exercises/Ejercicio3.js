const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: { ciudad: "Madrid", pais: "España" },
};

const destructuring = (person) => {
  let arr = {
    ...person,
    direccion: { ...person.direccion, ciudad: "Barcelona" },
  };
  return { arr, ...person };
};

const { arr, edad } = destructuring(persona);

console.log(arr);
console.log(edad);
