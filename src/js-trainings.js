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

// ---COPYING REFERENCE TYPES---

// ===EXAMPLE 1===

// const obj = {
//   name: "John",
//   age: 30,
// };

// const obj2 = obj;
// obj.age = "Я вроде меняю свойство age, только в obj";

// console.log(obj);

// console.log(obj2);

// ===EXAMPLE 2 same result as EXAMPLE 3===

// const obj = {
//   name: "John",
//   age: 30,
// };

// const obj2 = Object.assign({}, obj);
// obj.age = "Я вроде меняю свойство age, только в obj";

// console.log(obj);

// console.log(obj2);

// ===EXAMPLE 3 same result as EXAMPLE 3===

// const obj = {
//   name: "John",
//   age: 30,
// };

// const obj2 = { ...obj };
// obj.age = "Я вроде меняю свойство age, только в obj";

// console.log(obj);

// console.log(obj2);

// ===EXAMPLE 4===

// const obj = {
//   name: "John",
//   age: 30,
//   someObj: {
//     city: "Moscow",
//   },
// };

// const obj2 = JSON.parse(JSON.stringify(obj));

// obj.someObj.city = "New York";

// console.log(obj);

// console.log(obj2);

// ---FIBONACCI GENERATOR---

// function fibonacciGenerator(n) {
//   let output = [];

//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (let i = 2; i < n; i++) {
//       output.push(output.at(-2) + output.at(-1));
//     }
//   }

//   return output;
// }

// let res = fibonacciGenerator(20);
// console.log(res);

// ---FOR OF (for arrays and pseudo-arrays---

// let arr = ["Hello", 2, true, 4];

// for (const value of arr) {
//   console.log(value);
// }

// ---FOR IN (for objects)---

// ===EXAMPLE 1===

// let obj = {
//   name: "John",
//   lastName: "Travolta",
//   age: 30,
// };

// for (const key in obj) {
//   console.log(key);
// }

// ===EXAMPLE 2===

// let obj = {
//   name: "John",
//   lastName: "Travolta",
//   age: 30,
// };

// for (const key in obj) {
//   console.log(obj[key]);
// }

// ===EXAMPLES===

// let arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   console.log(value);
// }

// -------------------

// let obj = {
//   name: "John",
//   lastName: "Travolta",
//   age: 30,
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

// --------------

// let arr = document.querySelectorAll("li");

// for (let value of arr) {
//   console.log(value);
// }
// ---INNER HTML (elem.InnerHTML)---

// let elem = document.querySelector("h1");

// let oldData = elem.innerHTML;

// elem.innerHTML = `<p>${oldData}</p><p>ПРИВЕТ МИР</p>`;

// ---TEXT CONTENT (elem.textContent)---

// let elem = document.querySelector("h1");

// let oldData = elem.innerHTML;

// elem.textContent = `<p>${oldData}</p><p>ПРИВЕТ МИР</p>`;

// ---OUTER HTML (elem.outerHTML)---

// let elem = document.querySelector("h1");

// let oldData = elem.innerHTML;

// elem.outerHTML = "<p>ПРИВЕТ МИР</p>";

// ---.DATA (elem.data)---

// let elem = document.querySelector("h1");

// let oldData = elem.innerHTML;

// elem.outerHTML = "<p>ПРИВЕТ МИР</p>";

// console.log(elem.firstChild);
// elem.firstChild.data = "я новый комментарий";

// ---CREATE ELEMENT---

// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// console.log(secondHeader);

// ---CREATE TEXT NODE---

// let header = document.querySelector("h1");
// let secondHeader = document.createTextNode("Привет, я текст!");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.prepend(secondHeader);
// console.log(secondHeader);

// ===BEFORE===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.before(secondHeader);
// console.log(secondHeader);

// ===AFTER===
// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.after(secondHeader);
// console.log(secondHeader);

// ===PREPEND===
// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.prepend(secondHeader);
// console.log(secondHeader);

// ===APPEND===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.append(secondHeader);
// console.log(secondHeader);

// ---INCERT ADJACENT HTML(insertAdjacentHTML/ELEMENT/TEXT)---

// ===BEFORE BEGIN(beforebegin)===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.insertAdjacentHTML("beforebegin", "<p>Some Text</p>");
// console.log(secondHeader);

// ===AFTER BEGIN(afterbegin)===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.insertAdjacentHTML("afterbegin", "<p>Some Text</p>");
// console.log(secondHeader);

// ===BEFORE END(beforeend)===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.insertAdjacentHTML("beforeend", "<p>Some Text</p>");
// console.log(secondHeader);

// ===AFTER END(aftereend)===

// let header = document.querySelector("h1");
// let secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
// header.insertAdjacentHTML("afterend", "<p>Some Text</p>");
// console.log(secondHeader);

// ---MOVE, CLONE, REMOVE HTML ELEMENTS ---

// ===MOVE===

// let header = document.querySelector("h1");
// let ul = document.querySelector("ul");

// ul.prepend(header);

// ===CLONE (with "true" clone all internal elements)===

// let header = document.querySelector("h1");
// let ul = document.querySelector("ul");

// let ulClone = ul.cloneNode(); //"if true - cloning all internal elements"

// header.prepend(ulClone);

// ===REMOVE===

// let header = document.querySelector("h1");
// let ul = document.querySelector("ul");

// header.remove();

// ---CHANGING CSS STYLES WITH CSS---

// let header = document.querySelector("h1");

// ===EXAMPLE 1===
// let header = document.querySelector("h1");
// header.style.marginBottom = "100px";
// header.style.fontSize = "50px";

// ===EXAMPLE 2===
// let header = document.querySelector("h1");
// header.style.cssText = `
// color: red;
// margin-bottom:100px;
// `;

// ===CLASS LIST (classList)===

// ===ADD class(.add) добавить класс===
// header.classList.add("newClass");

// ===REMOVE class(.remove) удалить класс===
// let header = document.querySelector("h1");
// header.classList.remove("newClass");

// ===TOGGLE CLASS(.toggle) добавить класс, если его нет, а если он есть - удалить===
// let header = document.querySelector("h1");
// header.classList.toggle("newClass");

// ===CONTAINS CLASS (.contains) проверка наличия класса, возвращает true/false===
// let header = document.querySelector("h1");
// header.classList.contains("newClass");

// ===CLASS NAME (className)=== //удаляются все старые классы и прописываются, что мы указали в className
// let header = document.querySelector("h1");
// header.className = "newClass";

// ===GET COMPUTED STYLE===
// ===EXAMPLE 1===
// let header = document.querySelector("h1");
// let styleOfHeader = getComputedStyle(header);

// styleOfHeader.marginBottom;
// console.log(parseInt(styleOfHeader.marginBottom));

// ===EXAMPLE 2===

// let li = document.querySelectorAll("li");

// for (let value of li) {
//   value.classList.add("newClass");
// }

// ---ATTRIBUTE METHODS---

// ===CHANGE ATTRIBUTE===

// let img = document.querySelector("img");

// img.src = "https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg";

// ===HAS ATTRIBUTE(.hasAttribute)проверка наличия атрибута(true/false)===

// ===GET ATTRIBUTE(.getAttribute)получаем значение атрибута===

// ===SET ATTRIBUTE(.setAttribute)Устанавливем атрибут,Первый параметр - название, второй - значение===

// ===REMOVE ATTRIBUTE(.removeAttribute)удаляем атрибут===

// ---DOM ELEMENT EVENTS---
// ===ADD EVENT LISTENER(.AddEventListener('event', function(){}))===

// ---THIS---

// ===EXAMPLE 1===

// const user = {
//   name: "John",
//   age: 30,
//   calcAge: calcAge,
// };

// user.calcAge();

// function calcAge() {
//   console.log(2023 - this.age);
// }

// ===EXAMPLE 2===

// const user = {
//   name: "John",
//   age: 30,
//   calcAge: function () {
//     const self = this;
//     console.log(this);
//     function newFn() {
//       console.log(self);
//     }
//     newFn();
//   },
// };

// user.calcAge();

// ===EXAMPLE 3 with arrow functions===

// const user = {
//   name: "John",
//   age: 30,
//   calcAge: function () {
//     const newFn = () => {
//       console.log(this);
//     };
//     newFn();
//   },
// };

// user.calcAge();

// ---DESTRUCTURING ARRAYS---

// const arr = [
//   "apple",
//   "orange",
//   "lemon",
//   "watermelon",
//   "juice",
//   "tea",
//   "cocktail",
// ];

// // const friutOne = arr[0];
// // const friutTwo = arr[1];
// // const friutThree = arr[2];

// let [friutOne, friutTwo] = arr;
// console.log(friutOne);
// console.log(friutTwo);

// // ===HARD EXAMPLE===
// let a = friutOne;
// friutOne = friutTwo;
// friutTwo = a;
// console.log(friutOne);
// console.log(friutTwo);

// // ===EASY EXAMPLE===
// [friutOne, friutTwo] = [friutTwo, friutOne];

// console.log(friutOne);
// console.log(friutTwo);

// function cocktailMixer([fruit1, fruit2, , , drink]) {
//   console.log(`Вы приготовили ${fruit1} + ${fruit2} ${drink}`);
// }

// cocktailMixer(arr);

// ---DESTRUCTURING OBJECTS---
// let apple = "smallApple";
// let lemon = "smallLemon";

// const obj = {
//   fruits: {
//     apple: "apple",
//     orange: "orange",
//     lemon: "lemon",
//     watermelon: "watermelon",
//   },
//   drinks: {
//     juice: "juice",
//     tea: "tea",
//     cocktail: "cocktail",
//   },
// };

// ===HARD EXAMPLE===

// const { lemon, apple } = obj.fruits;

// console.log(lemon);
// console.log(apple);

// ===EASY EXAMPLE===

// const {
//   fruits: { lemon: friutOne, apple },
// } = obj;

// console.log(friutOne);
// console.log(apple);

// ===EXAMPLE 1===
// function cocktailMixer({ fruits: { apple, orange }, drinks: { juice } }) {
//   console.log(`Вы приготовили ${apple} ${juice} и ${orange} ${juice}`);
// }

// cocktailMixer(obj);

// ---SPREAD---

// const obj = {
//   fruits: ["apple", "orange", "lemon", "watermelon"],
//   drinks: ["juice", "tea", "cocktail"],
// };

// console.log(...obj.fruits);

// const str = "Hello";
// console.log(...str);

// const newFruits = [...obj.fruits];

// const bigArr = [...obj.fruits, ...str, "world", ...obj.drinks];
// console.log(bigArr);

// function cocktailMixer(drink, ing1, ing2) {
//   console.log(`Вы выбрали ${drink} из ${ing1} и ${ing2}`);
// }

// cocktailMixer("tea", ...obj.fruits);

// ---REST---

// const obj = {
//   fruits: ["apple", "orange", "lemon", "watermelon"],
//   drinks: ["juice", "tea", "cocktail"],
//   food: {
//     soup: "borsch",
//     pasta: "spaghetti",
//   },
// };

// const [a, b, c, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, c, others);

// function calc(...numbers) {
//   let sum = 0;
//   for (let value of numbers) {
//     sum += value;
//   }
//   console.log(sum);
// }

// calc(4, 6, 3, 6, 8);

// ---SET---

// const names = new Array(
//   "Дмитрий",
//   "Иван",
//   "Анастасия",
//   "Виктор",
//   "Игорь",
//   "Дмитрий",
//   "Иван",
//   "Анастасия"
// );

// console.log(names);

// let uniqNames = new Set(names);
// // uniqNames.add("Евгений");
// // uniqNames.delete("Дмитрий");
// // console.log(uniqNames);
// // console.log(uniqNames.size);
// // uniqNames.add("Евгений");
// console.log(...uniqNames);

// const updateNames = Array.from(uniqNames);
// console.log(updateNames);

// const name = "Dmitry";
// const uniqLetters = new Set(name);
// console.log(uniqLetters);

// for (let value of uniqLetters) {
//   console.log(value);
// }

// ---MAP---

// const hotel = new Map();
// hotel.set("categories", ["std", "eco", "suit", "lux"]);
// hotel.set(true, "Мы открыты");
// hotel.set(false, "Мы закрыты");
// const arr = [2, 3];
// hotel.set(arr, "Это массив");
// hotel.delete(arr);
// // hotel.clear();
// console.log(hotel);
// // console.log(hotel.get(arr));

// // ---DATA STRUCTURE CONVERSION---

// const hotel = new Map([
//   ["categories", ["std", "eco", "suit", "lux"]],
//   [true, "Мы открыты"],
//   [false, "Мы закрыты"],
// ]);
// console.log(hotel);

// for (let [key, value] of hotel) {
//   console.log(`Ключ ${key}, Значение ${value}`);
// }

// const obj = {
//   name: "John",
//   lastName: "Travolta",
//   age: 30,
// };

// const mapFromObj = new Map(Object.entries(obj));
// console.log(mapFromObj);

// const setFromMap = new Set(hotel);
// console.log(setFromMap);

// const arrFromMap = Array.from(hotel);
// console.log(arrFromMap);

// const arrFromObj = Object.entries(obj);
// console.log(arrFromObj);

// const objFromArr = Object.fromEntries(arrFromObj);
// console.log(objFromArr);

// // ---SLICE---

// const airplane = new String("TAP Air Portugal");
// const plane = "D430";
// const checkSeat = function (seat) {
//   const s = seat[0];
//   if (s == "A") console.log("Ваше место у окна");
//   else console.log("Ваше место не у окна");
// };

// checkSeat("A667");
// checkSeat("B667");
// // console.log(airplane);
// // console.log(airplane[4]);
// // console.log(airplane.indexOf("A"));
// // console.log(airplane.lastIndexOf("A"));
// // console.log(airplane.slice(0, airplane.indexOf(" ")));
// // console.log(airplane.slice(4, 7));
// // console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));
// // console.log(airplane.slice(-2));

// // ---TO LOWER CASE, TO UPPERCASE, TRIM---
// const airplane = "   TAP Air Portugal   ";
// console.log(airplane.toLocaleLowerCase());
// console.log(airplane.toLocaleUpperCase());
// console.log(airplane.trim());

// const priceRub = "2906р";
// const priceUSD =
//   priceRub.slice(0, priceRub.length - 1) / 72 + priceRub.replace("р", "$");
// console.log(priceUSD);

// const str = "Привет свет свет свет свет свет";
// const correctStr = str.replace("свет", "мир");
// console.log(correctStr);
// const correctStrAll = str.replaceAll("свет", "мир");
// console.log(correctStrAll);

// // ---INCLUDES---

// const flight = "s7ADR320";
// console.log(flight.includes("7AD"));
// console.log(flight.startsWith("s7"));
// console.log(flight.endsWith("320"));

// // ---SPLIT---
// const newNames = "misha nastya mishwit tigrinaya mikhail anastasia";

// // const arrFromStr = newNames.split(" ");
// // console.log(arrFromStr);
// // const strFromArray = arrFromStr.join("-- ");
// // console.log(strFromArray);

// function capitalNames(strNames) {
//   const arrNames = strNames.split(" ");
//   const newUpperNames = [];
//   for (let n of arrNames) {
//     newUpperNames.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(newUpperNames);
// }

// capitalNames(newNames);

// // ---PAD START / PAD END / REPEAT---

// const cardNumber = String(6543);
// console.log(cardNumber.padStart(16, "*"));
// console.log(cardNumber.padEnd(16, "*"));

// const hello = "hello ";
// console.log(hello.repeat(10));

// // ---DEFAULT FUNCTION PARAMETERS---
// const bookings = [];
// function createBooking(
//   flightNum,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking("343GRT", 5);

// const flight = "432FRE";
// const passenger = {
//   name: "Misha",
//   passport: 2314123135,
// };

// function checkIn(flightNum, passId) {
//   (flightNum = "111RRR"), (passId.name = "Mr. " + passId.name);

//   if (passId.passport == 2314123135) {
//     console.log("Вы успешно прошли регистрацию!");
//   } else {
//     console.log("Регистрация не удалась");
//   }
// }
// // function newPassport(person) {
// //   person.passport = Math.trunc(Math.random() * 100000000);
// // }

// // newPassport(passenger);
// checkIn(flight, passenger);

// // ---FIRST CLASS FEATURES фунции первого класса---

// function oneWord(str) {
//   return str.replaceAll(" ", "").toLowerCase();
// }

// // console.log(oneWord("ПрИвЕт Я пИшУ зАбОрЧиКоМ с ПрОбЕлАмИ"));

// function upperFirstLetter(str) {
//   const [first, ...other] = str.split(" ");
//   return [first[0].toUpperCase() + first.slice(1), ...other].join(" ");
// }
// console.log(upperFirstLetter("привет"));

// // ---HIGHER ORDER FUNCTIONS функции высшего порядка---

// function transformer(str, fn) {
//   console.log(`Это оригинальная строка: ${str}`);
//   console.log(`Изменённая строка: ${fn(str)}`);
// }

// transformer("привет, я очень люблю JS", upperFirstLetter);
// transformer("привет, я очень люблю JS", oneWord);

// document.querySelector("h1").addEventListener("click", function () {
//   console.log("Клик!");
// });

// // ---RETURNING A FUNCTION FROM A FUNCTION возврат функции из функции---

// function hello(hiStr) {
//   return function (name) {
//     console.log(`${hiStr} ${name}`);
//   };
// }

// const greeter = hello("Hi");

// greeter("Misha");

// hello("Здравствуйте")("Михаил");

// // ---CALL---

// function person(greetStr) {
//   console.log(greetStr + " " + this.firstName + " " + this.lastName);
// }

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// person.call(person1, "Добрый день!");

// const s7 = {
//   airlane: "s7",
//   iCode: "s7",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} забронировал место на самолёт компании ${this.airlane}, номер рейса ${this.iCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
//   },
// };

// s7.book(2131, "Misha");
// const book = s7.book;

// const turkish = {
//   airlane: "tr",
//   iCode: "TR",
//   booking: [],
// };
// book.call(turkish, 1122, "Dima");

// // ---BIND---

// const s7 = {
//   airlane: "s7",
//   iCode: "s7",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} забронировал место на самолёт компании ${this.airlane}, номер рейса ${this.iCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
//   },
// };

// s7.book(2131, "Misha");
// const book = s7.book;

// const turkish = {
//   airlane: "tr",
//   iCode: "TR",
//   booking: [],
// };
// book.call(turkish, 1122, "Dima");

// const bookTr = s7.book.bind(turkish, 66666666);

// bookTr("Vika");

// ---BASIC ARRAY METHODS---

// ===SLICE===

// const arr1 = ["a", "b", "c", "d", "e"];

// console.log(arr1.slice(2, 4));
// console.log(arr1);

// const arr2 = arr1.slice(0);
// console.log(arr2);

// ===REVERSE===

// const arr1 = ["a", "b", "c", "d", "e"];
// console.log(arr1.reverse());
// console.log(arr1);

// // ===CONCAT===

// const arr1 = ["a", "b", "c"];
// const arr2 = ["d", "e"];
// console.log(arr1.concat(arr2)); //или с помощью sread
// console.log([...arr1, ...arr2]);

// // ---FOR EACH (forEach)---

// // ===usual example===

// const arr1 = ["a", "b", "c"];
// for (let [key, value] of arr1.entries()) {
//   console.log(`Ключ: ${key}, Значение: ${value} `);
// }

// // ===forEach example===

// arr1.forEach(function (value, key, arr) {
//   console.log(`Ключ: ${key}, Значение: ${value} в массиве ${arr}`);
// });

// // ---FOR EACH(forEach) with MAP and SET---

// const map = new Map([
//   ["USD", "Dollars"],
//   ["RUB", "Rubbles"],
//   ["EUR", "Euro"],
// ]);

// // map.forEach(function (value, key, map) {
// //   console.log(key);
// //   console.log(value);
// //   console.log(map);
// // });

// const set = new Set(map);

// set.forEach(function (value, key, set) {
//   console.log(key);
//   console.log(value);
//   console.log(set);
// });

///////////////////////
// const rub = [100, 200, 300, 400];
// let usd = [];

// // ===WITH FOREACH===
// rub.forEach(function (value) {
//   usd.push((value / 72).toFixed(2));
// });

// console.log(usd);

// // ===WITH MAP()===
// const usd2 = rub.map((value) => (value / 72).toFixed(2));
// console.log(rub);
// console.log(usd2);

// // ---FILTER---

// const arr = [1, -10, 12, , 22, -35];

// const filteredArr = arr.filter(function (val) {
//   return val > 0;
// });

// console.log(filteredArr);

// // ---REDUCE---

// const arr = [5, 5, 5, 5];

// const sum = arr.reduce(function (acc, val, key, arr) {
//   //acc = accamulator
//   return acc + val;
// }, 100);

// console.log(sum);

// const arr = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
// const max = arr.reduce(function (acc, val) {
//   if (acc > val) {
//     return acc;
//   } else {
//     return val;
//   }
// }, arr[0]);

// console.log(max);

// // ---FIND---

// const arr = [10, 5, -2, -5, 23, -7];

// const firstMinusNum = arr.find(function (num) {
//   return num < 0;
// });
// console.log(firstMinusNum);

// // ---SOME---

// const arr = [1, 2, 3, 4, -5, -10]; ///вернёт true если какой-то элемент будет соответствовать треованиям функции

// const someResult = arr.some(function (val) {
//   return val > 0;
// });

// console.log(someResult);

// // ---EVERY---

// const arr1 = [1, 2, 3, 4, -5, -10]; ///вернёт true если все будут соответствовать треованиям функции

// const everyResult = arr.every(function (val) {
//   return val > 0;
// });

// console.log(everyResult);

// // ---FLAT---

// const arr = [[1, [2, 3]], 5, [5, [6, 7]]];

// console.log(arr.flat(1));
// console.log(arr.flat(2));

// ---SORT---

//если число а больше числа b, то поменяй элементы местами (Больше 0)

//если число а меньше числа b, то оставляй как есть (Меньше 0)

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(
  arr.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  })
);
console.log(arr);
