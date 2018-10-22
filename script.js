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
let colors5 = [];
let colors6 = [];
// Event Listeners

// Utility Functions
const randomIntFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = c => c[Math.floor(Math.random() * c.length)];
// Code
//--------------------------------------------------------------------------------
// Objects

for (i = 0; i < canvas.width / 3; i++) {
  let hue = Math.round(Math.random() * 360);
  colors.push(hue);
  colors2.push(hue);
  colors5.push(hue);
  colors3.unshift(hue);
  colors4.unshift(hue);
  colors6.unshift(hue);
}
colors3.sort((a, b) => a - b).reverse();
colors4.sort((a, b) => a - b).reverse();
colors6.sort((a, b) => a - b).reverse();
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
let ci = 0;
function insertionsort() {
  let value = colors5[ci];
  for (var j = ci - 1; j > -1 && colors5[j] > value; j--) {
    colors5[j + 1] = colors5[j];
  }
  colors5[j + 1] = value;
  if (ci < colors.length) ci += 1;
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
let ci2 = 0;
function insertionsort2() {
  let value2 = colors6[ci2];
  for (var j = ci2 - 1; j > -1 && colors6[j] > value2; j--) {
    colors6[j + 1] = colors6[j];
  }
  colors6[j + 1] = value2;
  if (ci2 < colors.length) ci2 += 1;
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
      i + colors2.length,
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
      i + colors4.length,
      canvas.height,
      1,
      (-(e / 360) * canvas.height) / 2
    );
  });
  colors5.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(
      i + colors5.length * 2,
      canvas.height / 2,
      1,
      (-(e / 360) * canvas.height) / 2
    );
  });
  colors6.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(
      i + colors6.length * 2,
      canvas.height,
      1,
      (-(e / 360) * canvas.height) / 2
    );
  });
  cocktailsort();
  bubblesort();
  insertionsort();
  cocktailsort2();
  bubblesort2();
  insertionsort2();
  c.font = "30px Arial";
  c.fillStyle = "white";
  c.fillText("Bubble Sort", 50, 50);
  c.fillText("Cocktail Sort", canvas.width / 3 + 50, 50);
  c.fillText("Bubble Sort Reversed", 50, canvas.height / 2 + 50);
  c.fillText(
    "Cocktail Sort Reversed",
    canvas.width / 3 + 50,
    canvas.height / 2 + 50
  );
  c.fillText("Insertion Sort", (canvas.width / 3) * 2 + 50, 50);
  c.fillText(
    "Insertion Sort Reversed",
    (canvas.width / 3) * 2 + 50,
    canvas.height / 2 + 50
  );
};
animate();
