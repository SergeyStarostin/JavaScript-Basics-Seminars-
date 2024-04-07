// Задание 1 


/*1 Дан блок <div class="block"></div>, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px */
const parentDivEl = document.querySelector('div.block');
const divEl = document.createElement('div');
divEl.classList.add('item');
parentDivEl.appendChild(divEl);
divEl.innerHTML = 'Элемент внутри';

/*2 Добавить данному блоку класс item_1 (использовать setAttribute) */
divEl.classList.add('item_1');

// другой способ
//divEl.setAttribute("class", divEl.getAttribute('class') + 'item_1');
