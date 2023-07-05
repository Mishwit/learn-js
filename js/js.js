"use strict";

// ---BMI CALCULATOR---

// const massPiter = 72,
//   heighPiter = 1.88,
//   massDenis = 82,
//   heighDenis = 1.73;

// const bmiPiter = massPiter / heighPiter ** 2;
// bmiDenis = massDenis / (heighDenis * heighDenis);
// bmiHigher = bmiPiter > bmiDenis;

// console.log(bmiHigher);

// ---LOVE CALCULATOR---

// const firstName = prompt("Напишите первое имя");

// const secondName = prompt("Напишите второе имя");

// const randomNumber = Math.floor(Math.random() * 100);

// if (
//   randomNumber < 33 &&
//   firstName != null &&
//   secondName != null &&
//   firstName != "" &&
//   secondName != ""
// ) {
//   alert(
//     `Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber}, вам нужно поискать кого-нибудь получше!`
//   );
// } else if (
//   randomNumber >= 33 &&
//   randomNumber < 66 &&
//   firstName != null &&
//   secondName != null &&
//   firstName != "" &&
//   secondName != ""
// ) {
//   alert(
//     `Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber}, совместимость хорошая, но может быть и лучше!`
//   );
// } else if (
//   randomNumber >= 66 &&
//   firstName != null &&
//   secondName != null &&
//   firstName != "" &&
//   secondName != ""
// ) {
//   alert(
//     `Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber}, вы отлично подходите друг другу!`
//   );
// } else {
//   alert("Упс, вы не ввели имя, попробуйте ещё раз!");
// }

// ---ACCES CHECK---

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

// ---NUM CHECK WITH SWITCH---

// let num = 100;
// do {
//   num = prompt("Введите число больше 100!", "0");
// } while (num <= 100 && num);

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Маловато");
//     break;
//   case 4:
//     alert("В точку!");
//     break;
//   case 5:
//     alert("Перебор");
//     break;
//   default:
//     alert("Нет таких значений");
// }

// let b = 3 + 3;

// switch (b) {
//   case 5:
//     alert("Мало");
//     break;
//   case 6:
//     alert("В точку!");
//     break;
//   case 7:
//     alert("Много");
//     break;
//   default:
//     alert("Нет таких значений");
// }

// ---CHECK AGE---

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("А родители разрешили?");
//   }
// }

// let age = prompt("Сколько вам лет?", "");

// if (checkAge(age)) {
//   alert("Доступ получен");
// } else {
//   alert("Доступ запрещён!");
// }

// ---COMMON FUNCTION CHECK---

// let userName = "Vasya";

// function showMessage() {
//   let message = "Привет!" + userName;
//   alert(message);
// }

// ---RANDOM NUM BETWEEN 100 AND 200---

// showMessage();
// function randomInt() {
//   const min = 100;
//   const max = 200;
//   let rand = Math.floor(min + Math.random() * (max + 1 - min));
//   console.log(rand);
// }
// randomInt();

// ---COMMON FUNCTION---

// function calc(a, b, c, d) {
//   console.log(a + b + c);
//   return a + b + c;
// }

// calc(1, 3, 5);

// ---FUNCTION DECLARATION---

// function calc(apple, orange) {
//   return apple + orange;
// }

// const result = calc("53", 5);
// console.log(result);

// ---FUNCTION EXPRESSION---

// let result2 = function (a, b, c) {
//   return a + b - c;
// };

// console.log(result2(10, 4, 2));
