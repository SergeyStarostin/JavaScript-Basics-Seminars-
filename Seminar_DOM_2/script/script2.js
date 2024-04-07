// Задание 2

/*1 Дан код
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>
Необходимо с помощью querySelector найти параграф с классом text */
const textEl = document.querySelector("div.elem div.content p.text");
console.log(textEl.innerHTML);

/*2. Вывести в консоль соседний элемент h2 */
console.log(textEl.previousElementSibling.innerHTML);

/*3 Вывести в консоль родительский элемент content */
console.log(textEl.parentElement);

/* 4. Вывести в консоль картинку */
console.log(textEl.parentElement.previousElementSibling);

/* 5. Вывести в консоль родительский элемент elem */
console.log(textEl.parentElement.parentElement);//elem
