'use strict'
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overplay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove("open-modal");
});