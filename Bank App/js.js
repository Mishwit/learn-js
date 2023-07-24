"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//Вывод на страницу всех приходов и уходов

function displayMovements(movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (value, i) {
    const type = value > 0 ? "deposit" : "withdrawal";
    const typeMessage = value > 0 ? "Внесение" : "Снятие";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${typeMessage}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${value}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

//Создание логина из ФИО в объекте

function createLogIn(accs) {
  accs.forEach(function (acc) {
    acc.logIn = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (value) {
        return value[0];
      })
      .join("");
  });
}

createLogIn(accounts);

//Подсчёт и вывод на страницу общего баланса

function calcPrintBalance(acc) {
  acc.balance = acc.movements.reduce(function (acc, val) {
    return acc + val;
  });
  labelBalance.textContent = `${acc.balance}RUB`;
}

//Сумма и вывод на страницу прихода и ухода в footer

function calcDisplaySum(movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₽`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₽`;

  labelSumInterest.textContent = `${incomes + out}₽`;
}

function updateUI(acc) {
  displayMovements(acc.movements);
  calcPrintBalance(acc);
  calcDisplaySum(acc.movements);
}

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("LogIn");
  currentAccount = accounts.find(function (acc) {
    return acc.logIn === inputLoginUsername.value;
  });
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;

    inputLoginPin.value = inputLoginUsername.value = "";
    console.log("PIN ok");
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const recieveAcc = accounts.find(function (acc) {
    return acc.logIn === inputTransferTo.value;
  });
  const amount = Number(inputTransferAmount.value);

  console.log(amount, recieveAcc);
  if (
    recieveAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieveAcc.logIn !== currentAccount.logIn
  ) {
    currentAccount.movements.push(-amount);
    recieveAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = "";
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.logIn &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc.logIn === currentAccount.logIn;
    });
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(overalBalance);
