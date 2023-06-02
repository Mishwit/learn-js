const firstName = prompt("Напишите первое имя"),
  secondName = prompt("Напишите второе имя");

const randomNumber = Math.floor(Math.random() * 100);

if (
  randomNumber < 33 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} вам нужно поискать человека с другим именем`
  );
} else if (
  randomNumber >= 33 &&
  randomNumber < 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} совместимость хорошая, но может быть и лучше`
  );
} else if (
  randomNumber >= 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randomNumber} вы идеально подходите друг другу`
  );
} else {
  alert("Вы не ввели имя. Попробуйте ещё раз");
}
