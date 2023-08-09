let num = 0;

const inc = (value) => {
  document.getElementById("num").innerHTML = num += value;
};

const dec = (value) => {
  document.getElementById("num").innerHTML = num >= value ? (num -= value) : 0;
};

const res = () => {
  num = 0;
  document.getElementById("num").innerHTML = num;
};
