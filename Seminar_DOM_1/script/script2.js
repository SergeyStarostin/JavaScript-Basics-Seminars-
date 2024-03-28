// Задание 2

/*1 Дан тег <a class="link" href="#">link text html</a>
a. Вам необходимо поменять текст внутри ссылки на “link text js”*/
const linkEl = document.querySelector("a.link");
linkEl.innerHTML = "link text js";

/*b. Заменить href, на значение https://developer.mozilla.org/ru/*/
linkEl.href = "https://developer.mozilla.org/ru/";

/*2 Дан тег <img class="photo" src="" alt="">
a. Вам необходимо с помощью js поменять значение src на любое изображение из интернета*/
const imgEl = document.querySelector("img.photo");
imgEl.src = "https://i.pinimg.com/736x/d4/c4/42/d4c442a8ceddb5a7b6fe793b6d3c3c41.jpg";
