let arr = [
  {
    name: "Vaqueros",
    price: 200,
    category: "ropa",
  },
  {
    name: "Camiseta",
    price: 100,
    category: "ropa",
  },
  {
    name: "Tablet",
    price: 50,
    category: "tecnologia",
  },
  {
    name: "Telefono Movil",
    price: 30,
    category: "tecnologia",
  },
  {
    name: "Pollo",
    price: 13,
    category: "comida",
  },
  {
    name: "Pan",
    price: 51,
    category: "comida",
  },
];

const operationWithProduct = (arr, category) => {
  const filterProducts = arr.filter((product) => product.category === category);

  // Usa slice para obtener solo los 2 primeros productos
  const productsLimited = filterProducts.slice(0, 2);

  // Usa map para obtener solo nombre y precio
  const productsSelected = productsLimited.map((product) => ({
    name: product.name,
    price: product.price,
  }));

  const addProduct = filterProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const greaterThanFifty = arr
    .filter((product) => product.price > 50)
    .map((product) => ({ name: product.name, price: product.price }));

  console.log(
    `Los productos de la categoría de "${category}" son: ${JSON.stringify(
      productsSelected,
      null,
      2
    )}`
  );
  console.log(
    `El precio total de la categoría de "${category}" son $${addProduct} `
  );
  console.log("Los precios mayores a $50 son: ", greaterThanFifty);

  return {
    productsSelected,
    addProduct,
    greaterThanFifty,
  };
};

// Llamada a la función
operationWithProduct(arr, "ropa");

const { productsSelected, addProduct, greaterThanFifty } = operationWithProduct(
  arr,
  "ropa"
);

console.log(productsSelected); // [{"name":"Vaqueros","price":200},{"name":"Camiseta","price":100}]
console.log(addProduct); // 300
console.log(greaterThanFifty); // [{"name":"Tablet","price":50},{"name":"Telefono Movil","price":30}]
