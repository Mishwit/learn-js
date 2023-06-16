"use strict";

// const firstName = prompt("Напишите первое имя"),
//   secondName = prompt("Напишите второе имя");

// const randomNumber = Math.floor(Math.random() * 100);

// if (
//   randomNumber < 33 &&
//   firstName != null &&
//   secondName != null &&
//   firstName != "" &&
//   secondName != ""
// ) {
//   alert(
//     `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} вам нужно поискать человека с другим именем`
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
//     `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} совместимость хорошая, но может быть и лучше`
//   );
// } else if (
//   randomNumber >= 66 &&
//   firstName != null &&
//   secondName != null &&
//   firstName != "" &&
//   secondName != ""
// ) {
//   alert(
//     `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} вы идеально подходите друг другу`
//   );
// } else {
//   alert("Вы не ввели имя. Попробуйте ещё раз");
// }

// function declaration
// function calc(apple, orange, watermelon, melon) {
//   return apple + orange - watermelon * melon;
// }

// const result = calc(5, 5, 2, 6);

// console.log(result);

// function expression
// let result2 = function (a, b, c) {
//   return a + b - c;
// };

// console.log(result2(10, 4, 3));

// const a = 3;

// function myFunction() {
//   function myFunction2() {
//     console.log(a);
//   }
//   myFunction2();
// }
// myFunction();

// function myFn(a = "Ваше число ", b = 7 + 2) {
//   console.log(a + b);
// }

// myFn("Номер вашего билета ");

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// function showOk() {
//   alert("Спасибо за согласие!");
// }

// function showCancel() {
//   alert("Вы отменили выполнение");
// }

// ask("Вы согласны?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Спасибо за согласие!");
//   },
//   function () {
//     alert("Вы не согласны");
//   }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы знакомый?",
//   function () {
//     alert("Да, вы мне знакомы");
//   },
//   function () {
//     alert("Нет, вы мне не знакомы");
//   }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласны"),
//   () => alert("Вы не согласны")
// );

let sum = (a, b) => a + b;

console.log(sum(5, 8));
