'use strict';

// JavaScript is synchronous.
// Execute the code black by orger after hoisting.
// hoisting: var, function declaration
// function goToCoper() {
//   console.log("회사에 출근합니다.");
// }

// function arriveAtCoper_tobe() {
//   return new Promise(function (resolve) {
//     setTimeout(function() {
//     console.log('회사에 도착했습니다.');
//     resolve();
//     }, 1000);
//   });
// }

// function Work() {
//   console.log('열심히 농땡이를 피웁니다.');
// }

// goToCoper();
// arriveAtCoper_tobe().then(function() {
//   Work();
// });

// Synchronous callback
function printImmediately(print) {
  print();
}
// printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
    // setTimeout(() => {
    //   if (
    //     (id === 'ellie' && password === 'dream') ||
    //     (id === 'coder' && password === 'academy')
    //   ) {
    //     onSuccess(id);
    //   } else {
    //     onError(new Error('not found'));
    //   }
    // }, 2000);
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else if (user === 'coder') {
          resolve({ name: 'coder', role: 'dream' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
    // setTimeout(() => {
    //   if (user === 'ellie') {
    //     onSuccess({name: 'ellie', role: 'admin'});
    //   } else {
    //     onError(new Error('no access')cod);
    //   }
    // }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passwrod');

async function checkUser() {
  try {
    const userId = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(userId);
    alert(`Hello ${user.name}, you have a ${user.role}`);
  } catch (error) {
    console.log(error);
  }
}

checkUser();

// userStorage.loginUser(id, password)
// .then(userStorage.getRoles)
// .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
// .catch(console.log)
// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(user, (userWithRole) => {
//       alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//     },
//     error => {
//       console.log(error);
//     }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// )

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
