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

// function myFn(a = "Ваше число ", b = 7 + 2) {
//   console.log(a + b);
// }

// myFn("Номер вашего билета ");

// ---CALLBACK FUNCTIONS---

// confirm("Сколько вам лет?");

// ---CALLBACK FUNCTION DECLARATION ---

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// function showOk() {
//   alert("Спасибо за согласие");
// }

// function showCancel() {
//   alert("Вы отменили выполнение");
// }

// ask("Вы согласны?", showOk, showCancel);

// ---CALLBACK FUNCTION EXPRESSION ---

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Спасибо за согласие");
//   },
//   function () {
//     alert("Вы отменили выполнение");
//   }
// );

// ---ARROW FUNCTIONS---

// ===First example===

// let funcArrow = (arg1, arg2) => {
//   return someExpression;
// };

// ===Second example===

// const myArrowFn = (a) => console.log(a);

// ===Third example===

// const myArrowFn = (a, b) => a + b;
// console.log(myArrowFn(5, 5));

// ---CALLBACK ARROW FUNCTION---

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Спасибо за согласие"),
//   () => alert("Вы отменили выполнение")
// );

// ---ARROW FUNCTION WITHOUT BRACES---

// let sum = (a, b) => a + b;

// console.log(sum(5, 5));

// ---ARROW FUNCTION WITH BRACES---

// let sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(1, 2));

// ---WINNER CALCULATOR---

// const calcAverage = (res1, res2, res3) => (res1 + res2 + res3) / 3;

// let scoreKats = calcAverage(44, 23, 71);
// let scoreDucks = calcAverage(65, 54, 49);

// function checkWinner(avgKats, avgDucks) {
//   if (avgKats >= 2 * avgDucks) {
//     console.log(
//       `crazyKats победили с результатом ${avgKats} против funnyDucks ${avgDucks}`
//     );
//   } else if (avgDucks >= 2 * avgKats) {
//     console.log(
//       `funnyDucks  победили с результатом ${avgDucks} против crazyKats ${avgKats}`
//     );
//   } else {
//     console.log("У нас ничья!");
//   }
// }

// checkWinner(scoreKats, scoreDucks);

// //Data 2

// scoreKats = calcAverage(85, 54, 41);
// scoreDucks = calcAverage(23, 34, 27);
// checkWinner(scoreKats, scoreDucks);

// ---OBJECTS---

// const user = {
//   name: "John",
//   age: 30,
// };

// user.sex = "male";
// console.log(user);

// delete user.sex;
// console.log(user);

// ---OBJECTS BRACKET NOTATION---

// const user = {
//   name: "John",
//   age: 30,
// };

// user["sex"] = "male";
// console.log(user);

// delete user["sex"];
// console.log(user);

// const propertyName = "newProperty";

// user[propertyName + " 2"] = "propertyValue";
// console.log(user["newProperty 2"]);

// const answer = prompt("Напишитe слово name или age", "");

// if (answer == "" || answer == undefined) {
//   alert("Вы отменили операцию или не ввели слова");
// } else {
//   alert(user[answer]);
// }

// const user = {
//   name: "John",
//   age: 30,
//   placeOfBirth: {
//     country: "Russia",
//     city: "Novgorod",
//   },
// };

// user.placeOfBirth.country = "USA";
// user.placeOfBirth["dateOfBirth"] = 1992;
// delete user["placeOfBirth"].city;
// console.log(user);

// ---FUNCTION EXPRESSION---

// const firstName = "John";
// const lastName = "Travolta";

// function calcAge() {
//   return 2023 - user.birthYear;
// }

// const user = {
//   firstName,
//   lastName,
//   birthYear: 1992,
//   calcAge: function () {
//     return 2023 - user.birthYear;
//   },
// };

// console.log(user.calcAge());

// ---FUNCTION DECLARATION---

// const firstName = "John";
// const lastName = "Travolta";

// function calcAge() {
//   return 2023 - this.birthYear;
// }

// const userFirst = {
//   firstName,
//   lastName,
//   birthYear: 1992,
//   calcAge,
// };

// const userSecond = {
//   firstName,
//   lastName,
//   birthYear: 2000,
//   calcAge,
// };

// console.log(userFirst.calcAge());
// console.log(userSecond.calcAge());

// ---FUNCTION EXPRESSION---

// const firstName = "John";
// const lastName = "Travolta";

// const userFirst = {
//   firstName,
//   lastName,
//   birthYear: 1992,
//   calcAge() {
//     console.log(this);
//     return 2023 - this.birthYear;
//   },
// };

// console.log(userFirst.calcAge());

// ---BMI CALC WITH OBJECTS---

// function calcBmi() {
//   this.bmiRes = this.mass / this.height ** 2;
//   return this.bmiRes;
// }

// const piter = {
//   name: "Piter",
//   mass: 72,
//   height: 1.88,
//   calcBmi,
// };

// const denis = {
//   name: "Denis",
//   mass: 82,
//   height: 1.73,
//   calcBmi,
// };

// piter.calcBmi();
// denis.calcBmi();

// if (piter.bmiRes > denis.bmiRes) {
//   console.log(
//     `Индекс массы тела ${piter.name} - (${piter.bmiRes}), больше, чем у ;у ${denis.name} - (${denis.bmiRes})`
//   );
// } else if (piter.bmiRes < denis.bmiRes) {
//   console.log(
//     `Индекс массы тела ${piter.name} - (${piter.bmiRes}), меньше, чем у ${denis.name} - (${denis.bmiRes})`
//   );
// } else {
//   console.log("Произошла ошибка. Попробуйте ещё раз");
// }

//  ---ARRAY---

// const user = ["John", 30, "male"];

// console.log(user);

// const year = 2023,
//   birthYear = 1992;
// const userArr = ["John", 30, 20, year - birthYear];

// console.log(userArr.at(-2));

// ---METHODS---

// const userArr = ["John", 30];

// ===PUSH(add at the end)===

// userArr.push("male");
// console.log(userArr);

// ===UNSHIFT(add at the start)===

// userArr.unshift(10);
// console.log(userArr);

// ===POP(delete at the end)===

// userArr.pop();
// console.log(userArr);

// ===SHIFT(delete at the start)===

// userArr.shift();
// console.log(userArr);

// ===SPLICE===

// const userArr = ["John", 30, "male", "Moscow"];

// const dataFromUserArr = userArr.splice(1, 2);

// console.log(dataFromUserArr);

// ===INCLUDES===

// const userArr = ["John", 30, "male", "Moscow"];

// console.log(userArr.includes(30));

// ===OF===

// const userArr = ["John", 30, "male", "Moscow"];

// console.log(userArr.indexOf("Moscow"));

// ---FOR---

// ===EXAMPLE 1===

// for (let i = 1; i <= 10; i++) {
//   if (i <= 4 && i > 1) {
//     console.log(`Это сообщение появилось в консоле ${i} разa`);
//   } else {
//     console.log(`Это сообщение появилось в консоле ${i} раз`);
//   }
// }

// ===EXAMPLE 2===

// const arr = [
//   "John",
//   "Travolta",
//   2023 - 1992,
//   "Moscow",
//   true,
//   ["Anna", "Peter", "Ivan"],
//   false,
// ];

// const arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof arr[i]);
//   arr2.push(typeof arr[i]);
// }

// console.log(arr2);

// ===EXAMPLE 3===

// const arr = [
//   "John",
//   "Travolta",
//   2023 - 1992,
//   "Moscow",
//   true,
//   ["Anna", "Peter", "Ivan"],
//   false,
// ];

// ---CONTINUE---

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") continue;
//   console.log(arr[i]);
// }

// ---BREAK---

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") break;
//   console.log(arr[i]);
// }

// ---WHILE && DO WHILE---

// ===EXAMPLE 1===

// let i = 1;
// do {
//   console.log(`Строка выводится в консоль ${i} раз`);
//   i++;
// } while (i <= 10);

// ===EXAMPLE 2===

// let someNumber = Math.floor(Math.random() * 10) + 1;
// console.log(someNumber);

// while (someNumber !== 10) {
//   console.log(`Вам выпало число ${someNumber}`);
//   someNumber = Math.floor(Math.random() * 10) + 1;
//   if (someNumber === 10) {
//     console.log(`Вы победили, вам выпало число ${someNumber}`);
//   }
// }
