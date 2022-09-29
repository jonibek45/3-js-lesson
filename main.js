let elInput = document.querySelector("#input");
let elButton = document.querySelector(".btn");
let elAnswer1 = document.querySelector(".box1__title");
let elAnswer2 = document.querySelector(".box2__title");
let elAnswer3 = document.querySelector(".box3__title");
let elAnswer4 = document.querySelector(".box4__title");
let elForm = document.querySelector("elForm");

elButton.addEventListener("click", function (e) {
  elAnswer1.textContent =
    Math.floor(Number(elInput.value) / 3.6) +"soat " + Math.floor((Number(elInput.value) / 3.6 - Math.floor(Number(elInput.value) / 3.6)) *60) + "daqiqa";

  elAnswer2.textContent =
    Math.floor(Number(elInput.value) / 20.1) +"soat " +Math.floor((Number(elInput.value) / 20.1 - Math.floor(Number(elInput.value) / 20.1)) *60) +"daqiqa";

  elAnswer3.textContent =
    Math.floor(Number(elInput.value) / 70) +"soat " +Math.floor((Number(elInput.value) / 70 - Math.floor(Number(elInput.value) / 70)) *60) +"daqiqa";

  elAnswer4.textContent =
    Math.floor(Number(elInput.value) / 800) +"soat " +Math.floor((Number(elInput.value) / 800 - Math.floor(Number(elInput.value) / 800)) *60) +"daqiqa";
});