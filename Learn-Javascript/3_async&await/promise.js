'use strict'

function goToCoper() {
  console.log("회사에 출근합니다.");
}

function arriveAtCoper_tobe() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log('회사에 도착했습니다.');
    resolve();
    }, 1000);
  });
}

function Work() {
  console.log('열심히 농땡이를 피웁니다.');
}

function arriveAtCoper_tobe_adv() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = Math.floor(Math.random()*2);
      if(status == 1) {
        resolve("회사에 도착했습니다.");
      } else {
          reject(new Error("도중 교통사고가 일어났습니다."));
      }
    }, 1000);
  });
}

function cure() {
  console.log('병원에 가서 치료를 받았습니다.');
}

goToCoper();
arriveAtCoper_tobe_adv()
.then(function(res) {
  console.log(res);
  Work();
})
.catch(function(err) {
  console.log(err);
  cure();
})
