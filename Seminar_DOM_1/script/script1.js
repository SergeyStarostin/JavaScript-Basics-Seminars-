// Задание 1 

/*1 Получите ссылку на первый абзац из дива с id,
равным block, выведите его в консоль.
<div id="block">
  <p>1</p>
  <p>2</p>
</div>*/
const divEl = document.querySelector("div#block");
console.log(divEl);

/*2 Получите ссылку на первый абзац с классом www и вывести его в консоль.
<p class="www">text 1</p>
<p class="www">text 2</p>*/
console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
console.log(divEl.querySelectorAll("p.www")[0].innerHTML);
