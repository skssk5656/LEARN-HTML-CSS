// JavaScript를 사용하여 AJAX 요청을 처리하는 방법

// 1. XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com', true);
xhr.oneradystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var responseData = JSON.parse(xhr.responseText);
    console.log(responseData);
  }
};
xhr.send();

// 2. FetchAPI를 사용한 AJAX 요청
fetch('http://api.example.com/data')
  .then(function (response) {
    if (!response.ok) {
      throw new Error('네트워크 오류'); // HTTP 응답이 성공이 아닌 경우 오류
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error('오류 발생:', error);
  });

// 2. jQuery
// $.ajax({
//   url: 'https://api.example.com/data',
//   method: 'GET',
//   dataType: 'json',
//   success: function (data) {
//     // 서버로부터 받은 데이터를 처리
//   },
//   error: function (error) {
//     console.error('데이터를 가져오는 중 오류 발생:', error);
//   }
// });

$.ajax({
  url: requestUrl,
  type: 'DELETE',
  async: true,
  data: JSON.stringify(requestParm),
  dataType: 'json',
  timeout: 10000,
  contenType: 'application/json',
});

$.ajax({
  type: 'POST', // 타입 (get, post. put 등등)
  url: '/test', // 요청할 서버 url
  async: true, // 비동기화 여부 (default : true)
  headers: {
    'Content-Type': 'application/json',
    'X-HTTP-Method-Override': 'POST',
  },
  dataType: 'text', // 데이터 타입 (html, xml, json, text 등등)
  data: JSON.stringify({
    //보낼 데이터 (Object, String, Array)
    no: no,
    name: name,
    nick: nick,
  }),
  success: function (result) {
    console.log(result);
  },
  error: function (request, status, error) {
    console.log(error);
  },
});
