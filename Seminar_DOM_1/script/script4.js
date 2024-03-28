// Задание 4

/* 1 Создать элемент button, добавить в блок <div class="content"></div> */
const divElement = document.querySelector("div.content");
const buttonElement = document.createElement("button");

/* 2 При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку*/
let count = 0;
divElement.appendChild(buttonElement);
buttonElement.innerHTML = "Button нажми на меня";
buttonElement.onclick = function (e) {
  count++;
  console.log(count);
};
