let num = 0;

function inc1() {
  num += 1;
  document.getElementById("num").innerHTML = num;
}

function inc2() {
  num += 2;
  document.getElementById("num").innerHTML = num;
}

function inc3() {
  num += 3;
  document.getElementById("num").innerHTML = num;
}

function dec1() {
  num > 0 ? (num -= 1) : "";
  document.getElementById("num").innerHTML = num;
}

function dec2() {
  num === 1 ? (num -= 1) : "";
  num > 0 ? (num -= 2) : "";

  document.getElementById("num").innerHTML = num;
}

function dec3() {
  num === 1 ? (num -= 1) : "";
  num === 2 ? (num -= 2) : "";
  num > 0 ? (num -= 3) : "";
  document.getElementById("num").innerHTML = num;
}

function res() {
  num = 0;
  document.getElementById("num").innerHTML = num;
}
