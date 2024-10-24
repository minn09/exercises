const externa = () => {
  let a = 1;
  const interna = (func) => {
    let suma = a + 2;
    let funcion = func();
    let resultado = suma + funcion;
    return resultado;
  };
  const interna2 = () => {
    let result = a * 2;
    return result;
  };
  let result = interna(interna2);
  return result;
};

console.log(externa());
