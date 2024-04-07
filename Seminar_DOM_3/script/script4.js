// Задание 4

/* 1 Создать в html список состоящий из 3-х произвольных элементов li */
/* 2 Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка” */
const buttonContainer4 = document.querySelector("div.container");

const btn9 = document.createElement("button");
btn9.innerHTML = "создать ещё один елемент";
buttonContainer4.appendChild(btn9);

const ulEl = buttonContainer4.querySelector("ul");
btn9.addEventListener("click", function (e) {
  const liEl = document.createElement("li");
  liEl.innerHTML = "новый элемент списка" + Math.random(1, 11);
  ulEl.appendChild(liEl);
});

/* 3 Создать кнопку, которая будет удалять первый элемент из созданного списка */
const btn10 = document.createElement("button");
btn10.innerHTML = "удалить элемент";
buttonContainer4.appendChild(btn10);
btn10.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  }
});

/* 4 Создать кнопку, при клике на которую ей добавляется класс “click” */
const btn11 = document.createElement("button");
btn11.innerHTML = "Добавляем класс “click”";
buttonContainer4.appendChild(btn11);
btn11.addEventListener("click", function (e) {
  e.target.setAttribute("class", "click");
});
