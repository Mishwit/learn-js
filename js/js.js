"use strict";

const firstName = "John";
const lastName = "Travolta";

const user = {
  firstName,
  lastName,
  birthYear: 1998,
  calcAge: function () {
    return 2023 - user.birthYear;
  },
};

console.log(user.calcAge());
