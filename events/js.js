"use strict";

const elems = document.querySelectorAll(".boxes__box");

const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");

for (let value of elems) {
  value.addEventListener("click", () => {
    value.classList.add("newStyle");
    audio.play();
  });
}
