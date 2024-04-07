//Задание 3

/* 
<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */
const h2Element = document.querySelector("h2.subtitle");

let currentElement = h2Element;
while (currentElement.parentElement.tagName !== "BODY") {
  console.log(currentElement.parentElement);
  currentElement = currentElement.parentElement;
}

/*js* с помощью рекурсии/
const h2El = document.querySelector('h2.subtitle');

function findParents(element) {
  console.log(element);
  if (element.parentElement.tagName !== "BODY"){
    findParents(element.parentElement);
  }
}
findParents(h2El);*/
