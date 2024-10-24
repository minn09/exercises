const api = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));
    reject();
  }, 2000);
});

const asyncApi = async () => {
  try {
    const result = await api;
    console.log(result);
  } catch (msj) {
    console.log(msj);
  }
};

asyncApi();
