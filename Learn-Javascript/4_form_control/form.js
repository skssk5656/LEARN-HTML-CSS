'use strict'

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const username = new FormData('username');
  const password = formData.get('password');

  // 데이터 처리 또는 유효성 검사 등 수행
  if (username && password) {
    alert('일치합니다.');
  } else {
    alert('사용자의 이름과 비밀번호를 입력하세요');
  }
});