//Задание 3

/* 1 Создать кнопку, которая добавляем заголовок h1 с текстом,
“Новый заголовок, данный элемент нужно расположить после кнопки */
const buttonContainer3 = document.querySelector("div.container");
const btn6 = document.createElement("button");

btn6.innerHTML = "Новый заголовок h1";
buttonContainer3.appendChild(btn6);
btn6.addEventListener("click", function (e) {
  const h1Text = document.createElement("h1");
  h1Text.innerHTML = "Новый заголовок";
  buttonContainer3.appendChild(h1Text);
});

/* 2 Создать вторую кнопку, которая будет удалять созданные заголовоки h1 */
const btn7 = document.createElement("button");
btn7.innerHTML = "Удалить заголовки h1";
buttonContainer3.appendChild(btn7);

btn7.addEventListener("click", function (e) {
  const h1Array = buttonContainer3.querySelectorAll("h1");
  h1Array.forEach(function (el) {
    el.remove();
  });
});

/* 3 Создать третью кнопку, при наведении на которую в консоль будет выводиться 
текст “вы навели на данную кнопку”, как только вы убираем курсор мыши с кнопки, 
в консоли должен появиться текст “Наведения на кнопку больше нет” */
const btn8 = document.createElement("button");
btn8.innerHTML = "hover";
buttonContainer3.appendChild(btn8);
btn8.addEventListener("mouseover", function (e) {
  console.log("вы навели на данную кнопку");
});
btn8.addEventListener("mouseleave", function (e) {
  console.log("Наведения на кнопку  больше нет");
});
