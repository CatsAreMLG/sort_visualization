const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let numbers = [];
let colors = [];
// Event Listeners

// Utility Functions
const randomIntFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = c => c[Math.floor(Math.random() * c.length)];
// Code
//--------------------------------------------------------------------------------
// Objects

for (i = 0; i < canvas.width; i++) {
  let r = Math.round(Math.random() * 360);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  colors.push([r, 100, 50]);
}

function bubblesort() {
  for (var i = 0; i < colors.length - 1; i++) {
    if (colors[i][0] > colors[i + 1][0]) {
      var temp = colors[i + 1];
      colors[i + 1] = colors[i];
      colors[i] = temp;
    }
  }
}

//--------------------------------------------------------------------------------
// Animate
let x = 0;
const animate = _ => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  colors.forEach(function(e, i) {
    x = `hsl(${e[0]}, ${e[1]}%, ${e[2]}%)`;
    c.fillStyle = x;
    c.fillRect(i, canvas.height, 1, -(e[0] / 360) * canvas.height);
  });
  bubblesort();
};
animate();
