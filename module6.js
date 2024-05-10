// Що буде виведено у консоль? undefined
// const user = {
//     email: "mango@gmail.com",
//     age: 20
// };
// const { username } = user; 
// console.log(username);

//! ======================================================

// Що буде виведено у консоль? "User"
// const user1 = {
//     email: "mango@gmail.com",
//     age: 20
// };
// const { username = "User", age } = user1; 
// // const username = user.username
// console.log(username);
// console.log(age);

//! ======================================================

// Що буде виведено у консоль? Помилка
// const user = {
//     email: "mango@gmail.com",
//     age: 20
// };
// const { email: userEmail } = user; 
// console.log(email);

// const user4 = {
//    name: "Oleg",
//    age: 46,
// }

// const { name: userName } = user4;
// // const userName = user.name
// console.log(userName);

// const { age: userAge } = user4;
// // const userAge = user.age
// console.log(age); // Помилка

//! ======================================================

// Що буде виведено у консоль? 10, 20
const user5 = {
    email: "mango@gmail.com",
    age: 20,
    location: { lat: 10, lon: 20},
};
const { location: { lat, lon } } = user5; 
console.log(lat, lon);

//! ======================================================

// Що буде виведено у консоль? undefined

// function foo({ username }) = {}) {
//     console.log(username);
// }

// foo();

//! ======================================================

// Що буде виведено у консоль? 3
// const values = [10, 3, 17, 84, 12, 6];
// const min = Math.min(...values);
// console.log(min);

//! ======================================================

// Що буде виведено у консоль? false
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

//! ======================================================

// Що буде виведено у консоль? { username: "Poly", age: 2}

const profile = {
    username: "Mango",
    age: 2
};

const profileUpdate = {
    username: "Poly"
};

const updatedProfile = {
    ...profile,
    ...profileUpdate
};

console.log(updatedProfile);

//! ======================================================

// Що буде виведено у консоль? { A: 3, B: 2, C: 6 }

const firstObject = { A: 1, B: 2 };
const secondObject = { A: 3, C: 4 };

const thirdObject = {
    A: 5,
    ...firstObject,
    ...secondObject,
    C: 6
};

console.log(thirdObject);

//! ======================================================

// Що буде виведено у консоль? [1, 2, 3, 4, 5]
// function foo(...args) {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5);

//! ======================================================

// Що буде виведено у консоль? [4, 5]
// function foo(a, b, c, ...args) {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5);

//! ======================================================

// Що буде виведено у консоль? {d: 4, e: 5}
// function foo({ a, b, c, ...props }) {
//     console.log(props);
// }

// foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });

//! ======================================

//* Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// Додали  { }
// function calcBMI({ weight, height }) { 
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(
//   calcBMI({
//     height: "1.75",
//     weight: "88,3",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

//* Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

//* Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport(companyName, repairBots, defenceBots)
// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

//* Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) total += value;

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//       privateBots: 40
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

//* Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

function createContact(partialContact) {
  return {
    list: "default",
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

//* Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

function transformUsername({ firstName, lastName, ...rest }) {
//   //   rest.fullname = `${firstName} ${lastName}`;
//   //   return rest;

  return {
    fullname: `${firstName} ${lastName}`,
    ...rest,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);

// // {
// //     id: 1,
// //     fullname: "Jacob Mercer",
// //     email: "j.mercer@mail.com",
// //     friendCount: 40,
// //   }

console.log(
  transformUsername({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);

//! ======================================

// const arr = [{ a: 5 }];

// // console.log(Math.max(...arr));

// const arr2 = [...arr];

// arr2[0].a = 10;

// console.log(arr, arr2);

// console.log(arr === arr2);

//! ======================================