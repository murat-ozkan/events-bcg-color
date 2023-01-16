function randomColor() {
  let color = "#";
  let letters = "0123456789ABCDEF";
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var color1 = randomColor();
  var color2 = randomColor();
  document.body.style.background =
    "linear-gradient(to right, " + color1 + " , " + color2 + ")";
}
