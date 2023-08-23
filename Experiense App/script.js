"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});

//остановка события

// const h1 = document.querySelector("h1");

// const alertH1 = () => {
//   alert("hello");
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 4000);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

const nav = document.querySelector(".nav");
const link = document.querySelector(".nav-link");
const navLinks = document.querySelector(".nav-links");

nav.addEventListener("click", (e) => {
  this.style.backgroundColor = randomColor();
});
