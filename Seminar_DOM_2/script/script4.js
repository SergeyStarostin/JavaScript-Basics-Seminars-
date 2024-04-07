// Задание 4

/* 
<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>

1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, 
а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода; */
const btnEl = document.querySelector("form button.btn");
const inputEl = document.querySelector('form input[type="text"]');
btnEl.onclick = function (e) {
  if (!inputEl.value && !document.querySelector("form h2")) {
    const h2El = document.createElement("h2");
    h2El.innerHTML = "вы не заполнили поле ввода";
    btnEl.parentElement.appendChild(h2El);
  }
};
/* 2. Цвет у рамки сделать красным */
inputEl.style.border = "1px solid red";
