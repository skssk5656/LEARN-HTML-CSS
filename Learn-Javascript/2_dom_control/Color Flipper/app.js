'use strict'
const colors = ["green", "red", "rgba(133,122,200)",
"#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  const randomNumber = getRandomNuber();
  console.log(randomNumber);

  document.body.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNuber() {
  return Math.floor(Math.random() * colors.length);
}