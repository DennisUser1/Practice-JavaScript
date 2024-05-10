// Функція зворотнього виклику (callback) це - функція, що передається в іншу функцію як аргумент
// Функція вищого порядку це - функція, яка приймає іншу функцію як параметр 
// Чи правильно передається функція logger як функція-callback? False
// function foo(callback) {
//     callback(10);
// }
// function logger(value) {
//     console.log(value);
// }

// foo(logger(5));
// Стрілочна функція створюється як функціональний вираз.
// Виберіть коректне створення стрілочної функції add - const add = (a, b) => a + b;
// Як називається такий синтаксис повернення у стрілочних функціях, const add = (a, b) => a + b;  ? Неявне повернення (implicit return)
// Чи є у стрілочних функцій локальна змінна arguments? False
// Яка із наведених функцій поверне рядок "Mango"? const foo = () => "Mango";
// Чи обов'язкові круглі дужки навколо оголошення одного параметра? const logger = (msg) => console.log(msg); - False

//* Example 1 - Коллбек функції
// Напишіть наступні функції:

//* createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//* logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//* logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

const apple = { name: "🍎", price: 30, quantity: 3 };
const lemon = { name: "🍋", price: 20, quantity: 5 };

function createProduct(obj, callback) {
  const newProduct = { ...obj, id: Date.now() };
  callback(newProduct);
  //   callback({ ...obj, id: Date.now() });
}

// const logProduct = (product) => console.table(product);
// const logTotalPrice = ({ price, quantity }) => console.table(price * quantity);

createProduct(apple, logProduct);
createProduct(lemon, logTotalPrice);

function logProduct(product) {
  console.table(product);
}

function logTotalPrice({ price, quantity }) {
  console.log(price * quantity);
}

//* Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount >= TRANSACTION_LIMIT) {
//       onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`);
//     } else if (amount > this.balance) {
//       onError(`Недостатньо коштів! Поточний баланс: ${this.balance}`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Кошти знято! Поточний баланс: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount >= TRANSACTION_LIMIT) {
//       onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`);
//     } else if (amount <= 0) {
//       onError("Неможливо покласти таку суму. Сума повинна бути більша за 0");
//     } else {
//       this.balance += amount;
//       onSuccess(`Кошти зараховано! Поточний баланс: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.error(`❌ Error! ${message}`);
// }

// // // account.withdraw(500, handleSuccess, handleError);
// // // account.withdraw(1500, handleSuccess, handleError);
// account.deposit(400, handleSuccess, handleError);
// account.deposit(1200, handleSuccess, handleError);
// account.deposit(-3, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.withdraw(700, handleSuccess, handleError);

//* Example 3 - Коллбек функції

// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

function each(array, callback) {
//     /*
//     1. створення нового пустого масиву
//     2. перебір масиву array
//     3. виклик колбек функції на кожному елементі масиву
//     4. запушити у пустий масив видозмінений елемент старого масиву
//     5. повернути новий масив
//     */
  const newArr = [];

//   //   for (const el of array) {
//   //     const newEl = callback(el);
//   //     newArr.push(newEl);
//   //   }

//   //   array.forEach(function (el) {
//   //     const newEl = callback(el);
//   //     newArr.push(newEl);
//   //   });

//   //   array.forEach((el) => {
//   //     const newEl = callback(el);
//   //     newArr.push(newEl);
//   //   });

  array.forEach((el) => newArr.push(callback(el)));

//   /*    array -  [1, 2, 3, 4, 5]
//         callback - plusOne

//   1. for (const el = 1 of array) {
//     const newEl = callback(el = 1); | = 1 + 1 = 2

//     newArr.push(newEl = 2); // [2]
//   }
//   2. for (const el = 2 of array) {
//     const newEl = callback(el = 2); | = 2 + 1 = 3

//     newArr.push(newEl = 3); // [2, 3]
//   }
//   3. for (const el = 3 of array) {
//     const newEl = callback(el = 3); | = 3 + 1 = 4

//     newArr.push(newEl = 4); // [2, 3, 4]
//   }
//   */

  return newArr;
}
const arr = [1, 2, 3, 4, 5];

const newArr = each(arr, (num) => num + 1); // [2,3,4,5,6]
const newArr2 = each(arr, (num) => num * 2); // [2, 4, 6, 8, 10]
const newArr3 = each(arr, sqrt);

console.log(newArr);
console.log(newArr2);
console.log(newArr3);

function plusOne(num) {
  return num + 1;
}

function multTwo(num) {
  return num * 2;
}

function sqrt(num) {
  return Math.sqrt(num);
}

//! ===================================

// function calculateAverage(...args) {
//   let total = 0;
//   args.forEach((el) => (total += el));
//   return total / args.length;
// }

// console.log(calculateAverage(1, 5, 3, 7, 2)); // 3.6
// console.log(calculateAverage(5, 8));
// console.log(calculateAverage(1, 2, 3));
