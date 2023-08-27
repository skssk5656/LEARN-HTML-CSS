let addBtn = document.getElementById('button');
let beBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');

let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('ckass', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

beBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

// 그룹화 중요!!
function removeParentNode(event) {
  event.target.parentNode.remove();
}

// 실험
let p = document.createElement('p');
p.textContent =
  '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세';

document.querySelector('section').appendChild(p);
