const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let numbers = [];
let colors = [];
let colors2 = [];
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
}

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

//--------------------------------------------------------------------------------
// Animate
const animate = _ => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  colors.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(i, canvas.height, 1, -(e / 360) * canvas.height);
  });
  colors2.forEach(function(e, i) {
    x = `hsl(${e}, 100%, 50%)`;
    c.fillStyle = x;
    c.fillRect(i + colors.length, canvas.height, 1, -(e / 360) * canvas.height);
  });
  cocktailsort();
  bubblesort();
};
animate();
