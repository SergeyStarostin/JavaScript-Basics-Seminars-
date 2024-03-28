//Задание 3

/* 1 Дан тег <div class="content"></div>*/
/* 2 Создайте новый элемент p*/
const divElem = document.querySelector("div.content");
const pElem = document.createElement("p");

/*3 Добавьте в него текст “Новый текстовый элемент”*/
pElem.innerHTML = "Новый текстовый элемент";

/*4 Добавьте созданный элемент внутри <div class="content"></div>*/
divElem.appendChild(pElem);

/*5 Удалите добавленный узел*/
pElem.remove();
