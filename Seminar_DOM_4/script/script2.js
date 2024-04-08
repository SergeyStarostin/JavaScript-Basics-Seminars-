// Задание 2

/* 1 В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно*/
/* 2. Кнопка отправить*/
/* 3. Если выбран чай, необходимо вывести сообщение “Чай закончился”*/
/* 4. Если выбран кофе, необходимо вывести соообщение “кофе закончился”*/
const divElem = document.querySelector("div.container2");
const btnTeaEl = divElem.querySelector("input.teaBtn");
const btnCoffeEl = divElem.querySelector("input.coffeBtn");
const btnSubEl = divElem.querySelector("button.btnSend");
btnSubEl.addEventListener("click", function (e) {
  if (btnCoffeEl.checked) {
    console.log("кофе закончился");
  } else if (btnTeaEl.checked) {
    console.log("Чай закончился");
  } else {
    console.log("все в наличии");
  }
});
