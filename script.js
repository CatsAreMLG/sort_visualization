const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let numbers = [];
let colors = [];
let colors2 = [];
let colors3 = [];
let colors4 = [];
// Event Listeners

// Utility Functions
const randomIntFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = c => c[Math.floor(Math.random() * c.length)];
// Code
//--------------------------------------------------------------------------------
// Objects

for (i = 0; i < canvas.width / 2; i++) {
  let hue = Math.round(Math.random() * 360);
  colors.push(hue);
  colors2.push(hue);
  colors3.unshift(hue);
  colors4.unshift(hue);
}
colors3.sort((a, b) => a - b).reverse();
colors4.sort((a, b) => a - b).reverse();
function bubblesort() {
  for (var i = 0; i < colors.length - 1; i++) {
    if (colors[i] > colors[i + 1]) {
      var temp = colors[i + 1];
      colors[i + 1] = colors[i];
      colors[i] = temp;
    }
  }
}
function cocktailsort() {
  for (var i = 0; i < colors2.length - 2; i++) {
    if (colors2[i] > colors2[i + 1]) {
      var temp = colors2[i];
      colors2[i] = colors2[i + 1];
      colors2[i + 1] = temp;
    }
  }
  for (i = colors2.length - 2; i > 0; i--) {
    if (colors2[i] > colors2[i + 1]) {
      var temp1 = colors2[i];
      colors2[i] = colors2[i + 1];
      colors2[i + 1] = temp1;
    }
  }
}
function bubblesort2() {
  for (var i = 0; i < colors3.length - 1; i++) {
    if (colors3[i] > colors3[i + 1]) {
      var temp = colors3[i + 1];
      colors3[i + 1] = colors3[i];
      colors3[i] = temp;
    }
  }
}
function cocktailsort2() {
  for (var i = 0; i < colors4.length - 2; i++) {
    if (colors4[i] > colors4[i + 1]) {
      var temp = colors4[i];
      colors4[i] = colors4[i + 1];
      colors4[i + 1] = temp;
    }
  }
  for (i = colors4.length - 2; i > 0; i--) {
    if (colors4[i] > colors4[i + 1]) {
      var temp1 = colors4[i];
      colors4[i] = colors4[i + 1];
      colors4[i + 1] = temp1;
    }
  }
}

//--------------------------------------------------------------------------------
// Animate
const animate = _ => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  colors.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(i, canvas.height / 2, 1, (-(e / 360) * canvas.height) / 2);
  });
  colors2.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(
      i + colors.length,
      canvas.height / 2,
      1,
      (-(e / 360) * canvas.height) / 2
    );
  });
  colors3.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(i, canvas.height, 1, (-(e / 360) * canvas.height) / 2);
  });
  colors4.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(
      i + colors.length,
      canvas.height,
      1,
      (-(e / 360) * canvas.height) / 2
    );
  });
  cocktailsort();
  bubblesort();
  cocktailsort2();
  bubblesort2();
  c.font = "30px Arial";
  c.fillStyle = "white";
  c.fillText("Bubble Sort", 50, 50);
  c.fillText("Cocktail Sort", canvas.width / 2 + 50, 50);
  c.fillText("Bubble Sort Reversed", 50, canvas.height / 2 + 50);
  c.fillText(
    "Cocktail Sort Reversed",
    canvas.width / 2 + 50,
    canvas.height / 2 + 50
  );
};
animate();
