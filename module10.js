// Що таке властивість [[Prototype]]? Властивість об'єкта, де зберігається посилання на його об'єкт-прототип
// Що робить виклик Object.create()? Встановлює об'єкт А прототипом об'єкта В
// const A = { value: 5};
// const B = Object.create(A);
// Як виконується пошук властивості в ланцюжку прототипів? Пошук закінчиться при знаходженні першого збігу
// Що таке "екземпляр класу" в ООП? ("інстанс") Окремий конкретний представник класу
// Що таке "інтерфейс" у ООП? Набір публічних властивостей та методів класу
// Який оператор призначений для створення екземпляра класу? new
// Скільки конструкторів потрібно обов'язково оголошувати у класі? Жодного
// Назва приватної властивості починається із  символу #    True
// Чи може метод класу бути приватним? True
// Чи потрібно оголошувати приватну властивість (#) поза конструктором класу? True
// Чи може бути конструктор класу статичним методом? False
// Що таке статичні властивості класу? Властивості, що не додаються в екземпляри (інстанси) при створенні 

// class User {
//   static calculateBirthDate(age) {
//     return 2023 - age;
//   }

//   constructor(userName, userAge) {
//     this.name = userName;
//     this.age = userAge;
//   }

//   greeting() {
//     console.log(
//       `Hello, ${this.name}! You was born in ${User.calculateBirthDate(
//         this.age
//       )}`
//     );
//   }
// }

// const user = new User("Serg", 25);
// const user1 = new User("Olena", 24);
// console.log(user);
// console.log(user1);
// console.dir(user);
// user.greeting();

// console.log(User.calculateBirthDate(60))

// Array.prototype.test = function () {
//   console.log("Я новий метод", this);
// };

// const arr = [1, 2, 3];

// arr.test();

//! ====================================

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value){
    this.numberOfPosts += value
  }
}

const mango = new Blogger({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  name: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//! ====================================

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

class Storage {
  constructor(arr) {
    this.items = arr;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((el) => el !== item);
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

//! ====================================

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (!Number.isNaN(Number(newLogin))) {
//       /*
//         newLogin = "9"
//         Number("9") -> 9
//         Number.isNaN(9) -> false
//         !false -> true

//         newLogin = "Mangodoge"
//         Number("Mangodoge") -> NaN
//         Number.isNaN(NaN) -> true
//         !true -> false
//         */
//       console.log("Логін не може бути числом!");
//     } else this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// mango.login = "9";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

//! ====================================

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  static findIndexByText(items, text) {
    return items.findIndex(({ text: noteText }) => text === noteText);
  }

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = Notes.findIndexByText(this.items, text);
    this.items.splice(index, 1);

//     // this.items = this.items.filter(({ text: noteText }) => text !== noteText);
  }
  updatePriority(text, newPriority) {
    const index = Notes.findIndexByText(this.items, text);
    this.items[index].priority = newPriority;

//     // const targetObj = this.items.find(
//     //   ({ text: noteText }) => text === noteText
//     // );
//     // targetObj.priority = newPriority;
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "Моя друга замітка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("Моя перша замітка");
console.log(myNotes.items);

myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
console.log(myNotes.items);

//! ====================================

// class Rectangle {
//   constructor(a, b) {
//     this.name = "Rectangle";
//     this.a = a;
//     this.b = b;
//   }

//   greeting() {
//     console.log(`Hello! I am ${this.name}`);
//   }

//   calculateArea() {
//     return this.a * this.b;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
// }

// const rec = new Rectangle(4, 3);

// console.log(rec);

// rec.greeting();
// console.log(rec.calculateArea());

// const square = new Square(19);
// console.log(square);

// square.greeting();
// console.log(square.calculateArea());

//! ====================================