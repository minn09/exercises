let div = document.querySelector("div");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

button1.addEventListener("click", function () {
  div.innerHTML = "Hola como estan";
});

button2.addEventListener("click", function () {
  div.innerHTML = "Hola como feos";
});

button3.addEventListener("click", function () {
  div.innerHTML = "Hola como estan";
});
