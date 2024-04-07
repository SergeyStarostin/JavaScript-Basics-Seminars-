// Задание 1 

/* 1 В html создать кнопку button*/
const fundBtn = document.querySelector("button.btn");

/* 2 После загрузки страницы вывести в консоль текст “страница загрузилась” */
window.addEventListener('load', function (e) {
  console.log('Страница загрузилась');
});

/* 3 Добавить событие onclick которое выводит в консоль текст “событие onclick” */
fundBtn.addEventListener('click', function (e) {
  console.log('Событие addEventListener');
});
