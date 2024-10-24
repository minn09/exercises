// JavaScript asincrono

// Callbacks
const callback = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

callback(() => {
  console.log("Hola");
});

// Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// Async/Await
async function asyncFunction() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola");
    }, 1000);
  });
  console.log(result);
}

asyncFunction();

// Promise with async/await
async function asyncFunctionPromise() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(result);
}

asyncFunctionPromise();

// const apiCall = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };

// apiCall();

// const apiCallPromise = async () => {
//   const apiCall = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));
//       reject();
//     }, 2000);
//   });
//   try {
//     const result = await apiCall;
//     console.log(result);
//   } catch (msj) {
//     console.log(msj);
//   }
// };

// apiCallPromise();
