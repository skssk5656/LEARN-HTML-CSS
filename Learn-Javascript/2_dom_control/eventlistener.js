const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');

const handleClick = function(event) {
  console.log('event.target')
}

btn1.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)
btn3.addEventListener('click', handleClick)

// btn2.addEventListener('click', handleClick);
// btn2.addEventListener('click', function(){
//   console.log("또 다른 핸들러가 추가 등록되었다!");
// });

// btn2.removeEventListener('click', handleClick);