// Задание 2
/* 1 Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)*/
const buttonContainer = document.querySelector("div.container");

const btn1 = document.createElement("button");
btn1.innerHTML = "кнопка1";
const btn2 = document.createElement("button");
btn2.innerHTML = "кнопка2";
const btn3 = document.createElement("button");
btn3.innerHTML = "кнопка3";

/* 2 Добавить клик на кнопку , чтобы в консоль выводилась 
именно та кнопка на которую мы нажали*/
buttonContainer.appendChild(btn1);
buttonContainer.appendChild(btn2);
buttonContainer.appendChild(btn3);

const clickBtn = function (e) {
  console.log(e.target.innerHTML);
};
btn1.addEventListener("click", clickBtn);
btn2.addEventListener("click", clickBtn);
btn3.addEventListener("click", clickBtn);

/* 3 Добавить кнопку button с текстом 4, которая считает сколько раз 
на нее нажали и количество нажатий на эту кнопку выводит в консоль*/
const btn4 = document.createElement("button");
btn4.innerHTML = "кнопка4";

buttonContainer.appendChild(btn4);
let count = 0;
btn4.addEventListener("click", function (e) {
  count++;
  console.log(count);
});

/* 4 Создать кнопку button с текстом 5, при клике на которую,
 меняется текст данной кнопки на “Вы нажали на эту кнопку” */
const btn5 = document.createElement("button");
btn5.innerHTML = "кнопка5";

buttonContainer.appendChild(btn5);
btn5.addEventListener("click", function (e) {
  e.target.innerHTML = "Вы нажали на эту кнопку";
});
