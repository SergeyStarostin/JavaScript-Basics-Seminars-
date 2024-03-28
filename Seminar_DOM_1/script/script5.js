// Задание 5

/*1 Дан тег <div class="content"></div>*/
const divElm = document.querySelector("div.content");

/*2 Создайте с помощью javascript новый элемент button*/
const butnElm = document.createElement("button");

/*3 Добавьте текст для кнопки “Отправить”*/
divElm.appendChild(butnElm);
butnElm.innerHTML = "Button нажми на меня";
butnElm.classList.add("btn");// добавляем класс кнопке
// butnElm.style.color = "blue";

/*4 При клике на данную кнопку необходимо чтобы текст
поменялся на “Текст отправлен”*/
butnElm.onclick = function (e) {
  console.log(e.target);
  e.target.innerHTML = "Текст отправлен";
};
