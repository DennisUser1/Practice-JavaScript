// За допомогою якого методу можна додати слухача події на елемент elem? elem.addEventListener(event, handler)
// Чи можна додати елементу кілька обробників на тип події? True
// За допомогою якого методу можна видалити слухача події з елемента elem? elem.removeEventListener(event, handler)
// const elem = document.querySelector(".my-selector");
// Чому функцію-обробник події не роблять анонімною? Щоб при необхідності, слухача події можна було видалити 
// const handleEvent = event => {
//     console.log(event);
// };
// elem.addEventListener("click", handleEvent);
//  Яка подія відбувається під час відправлення форми? submit
// form.addEventListener("???", event => {
//...
// });
// Який метод скасовує дію браузера за замовчуванням під час події? event.preventDefault()
// form.addEventListener("submit", event => {
//...
// });
// Яка властивість дозволяє отримувати поточне текстове значачення елементів <input>, <select>, <textarea>? value
// В якій властивості зберігається код натиснутої клавіші при події keydown? event.code
// document.addEventListener("keydown", event => {
//...
// });
// В якій властивості зберігається символ натиснутої клавіші під час події keydown? event.key 
// document.addEventListener("keydown", event => {
//...
// });
// Яка подія реагує на введення кожного нового символу в елемент <input>? input
// input.addEventListener("???", event => {
//...
// });
// Коли браузер створює подію change для елемета <input>? При втраті фокусу
// Виберіть неіснуючий тип події для addEventListener? enter
// Виберіть існуючі типи події для addEventListener - Submit, Click, Focus
// Чи можуть дві події бути викликані одночасно? False


// window.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.key, e.code);
// });

//! =========

// const mainForm = document.getElementById("mainForm");

// console.dir(mainForm.elements);
// console.dir(mainForm.elements.text);
// console.dir(mainForm.elements.submit);

// target - елемент, на якому відбулася подія

// mainForm.addEventListener("submit", onSubmit);
// mainForm.elements.text.addEventListener("input", onInput);
// mainForm.elements.text.addEventListener("change", onChange);

// function onSubmit(event) {
//   event.preventDefault();
//   console.log(mainForm.elements.text.value);
// }

// function onInput(event) {
//   console.log("INPUT EVT");
//   console.log(event.target.value);
// }

// function onChange(event) {
//   console.log("CHANGE EVT");
//   console.log(event.target.value);
// }

// blur & focus
// const openModalBtn = document.getElementById("openModalBtn");

// openModalBtn.addEventListener("focus", () =>
//   console.log("На кнопці сфокусувалися")
// );

// openModalBtn.addEventListener("blur", () =>
//   console.log("Кнопка втратила фокус")
// );

//! =========

// const select = document.getElementById("select");

// select.addEventListener("change", (event) => {
//   console.dir(event.target.value);
// });

//! =========

/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
    1. Отримуємо всі рефси
    2. Вішаємо обробник подій на кнопку - click
        2.1. Додаємо клас open до body
    3. Вішаємо обробник подій на оверлей і на крестик - click
        3.1. Забираємо клас open у body
*/

//! 1 варіант - викликати ф-цію toggleModalOpen тільки тоді, коли модалка відкрита

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);

// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape" && document.body.classList.contains(openClass)) {
//     toggleModalOpen();
//     console.log("Натиснули Escape");
//   }
// }

//! 2 варіант - вручну прибрати клас

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);

// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     document.body.classList.remove(openClass);
//     console.log("Натиснули Escape");
//   }
// }

//! 3 варіант - розділити логіку і створити окремо ф-цію для відкриття і окремо для закриття

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", modalOpen);
// refs.overlay.addEventListener("click", modalClose);
// refs.modalCloseBtn.addEventListener("click", modalClose);
// window.addEventListener("keydown", closeModalOnESC);

// function modalOpen() {
//   document.body.classList.add(openClass);
// }
// function modalClose() {
//   document.body.classList.remove(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     modalClose();
//     console.log("Натиснули Escape");
//   }
// }

//! ====================

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", modalOpen);
// refs.overlay.addEventListener("click", modalClose);
// refs.modalCloseBtn.addEventListener("click", modalClose);

// function modalOpen() {
//   document.body.classList.add(openClass);
//   window.addEventListener("keydown", closeModalOnESC);
// }

// function modalClose() {
//   document.body.classList.remove(openClass);
//   window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     modalClose();
//     console.log("Натиснули Escape");
//   }
// }