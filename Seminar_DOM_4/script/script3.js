//Задание 3

/* 1. Создать поле ввода (пароль) и кнопку "Отправить" */
const password = "123456";
const divElement = document.querySelector("div.container3");
const inputElement = divElement.querySelector("input.password");
const btnElement = divElement.querySelector("button.btnPass");

/* 2. Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный” */
btnElement.addEventListener("click", function (e) {
  if (inputElement.value === password) {
    inputElement.classList.remove("bord-red");
    inputElement.classList.add("bord-green");
  } else {
    inputElement.classList.remove("bord-green");
    inputElement.classList.add("bord-red");
  }
});
