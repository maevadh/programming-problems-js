let obj = {
  amount: "",
  title: prompt("Ingresa un titulo"),
};

/* while (typeof obj.amount === NaN || typeof obj.amount === "string") {
  obj.amount = +prompt("Ingresa un numero");
} */

do {
  obj.amount = +prompt("Ingresa un numero");
} while (typeof obj.amount === NaN);

let amount = document.getElementById("amount");
amount.textContent = obj.amount;

let title = document.getElementById("title");
title.textContent = obj.title;
