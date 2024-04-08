// Задание 4

/* 1 Создать поле ввода и под ним заголовок h1 с текстом “Заголовок” */
/* 2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода */
const divElm = document.querySelector('div.container4');
const inputEl = divElm.querySelector('input.input');
const h2El = divElm.querySelector('h2.h2class');
const h3El = divElm.querySelector('h3.h3class');

inputEl.addEventListener('input', function (e) {
    h2El.innerHTML = e.target.value;
})

inputEl.addEventListener('change', function (e) {
    h3El.innerHTML = e.target.value;
});