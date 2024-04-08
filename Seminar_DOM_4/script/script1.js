// Задание 1

/* 1. В html создать элемент checkbox и текст рядом с
ним “Согласен с условиями”. Добавить кнопку отправить*/

/* 2. При клике на кнопку отправить нужно проверять
выбран ли активным элемент checkbox */
const divEl = document.querySelector("div.form");
const btnEl = divEl.querySelector("button.btn");
const checkEl = divEl.querySelector("input.check");

/* 3. Если элемент не выбран, добавить текст под
чекбоксом “Необходимо согласиться с условиями” */

btnEl.addEventListener("click", function (e) {
  console.log("123");
  if (!checkEl.checked) {
    const spanEl = document.createElement("span");
    spanEl.innerHTML = "Необходимо согласиться с условиями";
    divEl.appendChild(spanEl);
  }
});
