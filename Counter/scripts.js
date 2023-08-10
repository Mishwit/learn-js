let num = 0;

const inc = (value) => {
  document.getElementById("num").innerHTML = num += value;
};

const dec = (value) => {
  document.getElementById("num").innerHTML = num >= value ? (num -= value) : 0;
  if (num < value) {
    let element = document.getElementById("dec2");
    element.classList.add("button_disabled");
  } else {
    let element = document.getElementById("dec2");
    element.classList.remove("button_disabled");
  }
};

const res = () => {
  num = 0;
  document.getElementById("num").innerHTML = num;
};
