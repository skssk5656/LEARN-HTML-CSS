// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2.await 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTomato() {
  await delay(1000);
  return '🍅';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}


async function pickFruits() {
  // const tomatoPromise = getTomato();
  // const bananaPromise = getBanana();
  const tomato = await getTomato();
  const banana = await getBanana();
  return `${tomato} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getTomato(), getBanana()]).then(fruits =>
    fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getTomato(), getBanana()]);
}

pickOnlyOne().then(console.log);
