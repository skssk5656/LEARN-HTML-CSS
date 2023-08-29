let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

console.log(btn1);

btn1.onclick = function () {
  alert('Hello 프로페티 리스너');
};

btn2.addEventListener('click', helloEvent);

function helloEvent() {
  alert('addEventListner 1');
}

btn2.removeEventListener('click', helloEvent);
