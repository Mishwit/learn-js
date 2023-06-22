"use strict";

// let userName = prompt("Кто здесь?", "");

// if (userName === "Админ") {
//   let pass = prompt("Пароль?", "");
//   if (pass === "Я главный") {
//     alert("Здравствуйте, босс!");
//   } else if (pass === null || pass === "") {
//     alert("Операция отменена");
//   } else {
//     alert("Я вас не знаю");
//   }
// } else if (userName === null || "") {
//   alert("Операция отменена");
// } else {
//   alert("Я вас не знаю");
// }

// let num = 100;
// do {
//   num = prompt("Введите число больше 100!", "0");
// } while (num <= 100 && num);

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Маловато");
    break;
  case 4:
    alert("В точку!");
    break;
  case 5:
    alert("Перебор");
    break;
  default:
    alert("Нет таких значений");
}

let b = 3 + 3;

switch (b) {
  case 5:
    alert("Мало");
    break;
  case 6:
    alert("В точку!");
    break;
  case 7:
    alert("Много");
    break;
  default:
    alert("Нет таких значений");
}
