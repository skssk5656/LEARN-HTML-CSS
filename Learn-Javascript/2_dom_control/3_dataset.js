let liList = document.querySelectorAll('li');
let img = document.querySelector('img');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);

liList[1].addEventListener('click', selectItem);

liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
