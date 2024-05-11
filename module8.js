// Чиста функція - це функція, що не змінює вхідні дані
// Метод Array.prototype.forEach(), нічого не повертає, а лише перебирає масив
// Що буде виведено у консоль? "a" "b" "c"
// const values = ["a", "b", "c"];
// values.forEach(value => console.log(value));
// Метод Array.prototype.map() мутує (змінює) вихідний масив? False
// Для чого використовується метод Array.prototype.filter()? Для пошуку кількох елементів у масиві
// Що повертає Array.prototype.filter()? Завжди масив 
// Що поверне Array.prototype.filter(), якщо нічого не знайдено? Порожній масив
// Для чого використовується Array.prototype.find()? Для пошуку одного унікального елемента у масиві
// Що поверне Array.prototype.find(), якщо нічого не знайдено? Undefined 
// Що може бути результатом роботи методу Array.prototype.reduce()? Що завгодно, залежить від логіки та початкового значення акумулятора
// Які аргументи є у callback-функції, що передається методом reduce() і в якому порядку? акумулятор, поточний елемент, індекс, масив
// Навіщо потрібен другий парамент методу reduce()? Це початкове значення акумулятора
// Функціональний метод Array.prototype.sort() за замовчуванням сортує та перебирає, змінює та повертає колекцію

const cars = [
    {
      make: "Honda",
      model: "CR-V",
      type: "suv",
      amount: 14,
      price: 24045,
      onSale: true,
    },
    {
      make: "Honda",
      model: "Accord",
      type: "sedan",
      amount: 2,
      price: 22455,
      onSale: true,
    },
    {
      make: "Mazda",
      model: "Mazda 6",
      type: "sedan",
      amount: 8,
      price: 24195,
      onSale: false,
    },
    {
      make: "Mazda",
      model: "CX-9",
      type: "suv",
      amount: 7,
      price: 31520,
      onSale: true,
    },
    {
      make: "Toyota",
      model: "4Runner",
      type: "suv",
      amount: 19,
      price: 34210,
      onSale: false,
    },
    {
      make: "Toyota",
      model: "Sequoia",
      type: "suv",
      amount: 16,
      price: 45560,
      onSale: false,
    },
    {
      make: "Toyota",
      model: "Tacoma",
      type: "truck",
      amount: 4,
      price: 24320,
      onSale: true,
    },
    {
      make: "Ford",
      model: "F-150",
      type: "truck",
      amount: 11,
      price: 27110,
      onSale: true,
    },
    {
      make: "Ford",
      model: "Fusion",
      type: "sedan",
      amount: 13,
      price: 22120,
      onSale: true,
    },
    {
      make: "Ford",
      model: "Explorer",
      type: "suv",
      amount: 6,
      price: 31660,
      onSale: false,
    },
  ];

//* Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

const getModels = (cars) => cars.map(({ model }) => model);

// function getModels(cars) {
//   return cars.map(function ({ model }) {
//     return model;
//   });
// }

console.table(getModels(cars));

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) =>
cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);
// /*
// cars.filter((car) => car.price <= threshold);
// */

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 23000));

//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);
// // onSale === true

console.table(getCarsWithDiscount(cars));

//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

const getCarsWithType = (cars, type) =>
  cars.filter(({ type: carType }) => carType === type);

console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithType(cars, "sedan"));
console.table(getCarsWithType(cars, "truck"));

//* Example 6 - Метод find

const getCarByModel = (cars, model) =>
  cars.find(({ model: carModel }) => model === carModel);
// // (car) => car.model === model

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModel(cars, "CX-9"));

//! === SORT ===

// const arr = [1, 5, 14, 32, 2, 34, 3, 54, 21, 3];

// arr.sort((a, b) => a - b); // за зростанням
// arr.sort((a, b) => b - a); // за спаданням

// console.log(arr);

//! =====

// const arr = ["b", "r", "s", "a", "c"];

// arr.sort((a, b) => a.localeCompare(b)); // за зростанням
// arr.sort((a, b) => b.localeCompare(a)); // за спаданням

// console.log(arr);

//! =====

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

const sortByAscendingAmount = (cars) =>
  [...cars].sort((a, b) => a.amount - b.amount);

console.table(sortByAscendingAmount(cars));

//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

const sortByDescendingPrice = (cars) =>
  [...cars].sort((a, b) => b.price - a.price);

console.table(sortByDescendingPrice(cars));
