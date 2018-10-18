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
  let h = Math.round(Math.random() * 360);
  colors.push([h, 100, 50]);
  colors2.push([h, 100, 50]);
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
function cocktailsort() {
  for (var i = 0; i < colors2.length - 2; i++) {
    if (colors2[i][0] > colors2[i + 1][0]) {
      var temp = colors2[i];
      colors2[i] = colors2[i + 1];
      colors2[i + 1] = temp;
    }
  }
  for (i = colors2.length - 2; i > 0; i--) {
    if (colors2[i][0] > colors2[i + 1][0]) {
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
    x = `hsl(${e[0]}, ${e[1]}%, ${e[2]}%)`;
    c.fillStyle = x;
    c.fillRect(i, canvas.height, 1, -(e[0] / 360) * canvas.height);
  });
  colors2.forEach(function(e, i) {
    x = `hsl(${e[0]}, ${e[1]}%, ${e[2]}%)`;
    c.fillStyle = x;
    c.fillRect(
      i + colors.length,
      canvas.height,
      1,
      -(e[0] / 360) * canvas.height
    );
  });
  cocktailsort();
  bubblesort();
};
animate();
