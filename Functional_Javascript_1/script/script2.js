// Задание 2

/* 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в 
качестве аргумента и возвращает новый массив, содержащий только четные числа. */
function getEvenNumbers(array) {
  return array.filter((elem) => {
    return elem % 2 === 0;
  });
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// второй вариант решения
const getEvenNumbersTwo = (array) => array.filter((elem) => elem % 2 === 0);
console.log(getEvenNumbersTwo([1, 2, 3, 4, 5, 6]));

/* 2. Задача: Напишите функцию calculateAverage, которая принимает массив 
чисел в качестве аргумента и возвращает среднее значение этих чисел. */
function calculateAverage(array) {
  return array.reduce((sum, elem) => sum + elem) / array.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

/* 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая буква 
каждого слова является заглавной. */
function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
console.log(capitalizeFirstLetter("напишите функцию calculateAverage"));

// второй вариант решения
function capitalizeFirstLetterTwo(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
console.log(capitalizeFirstLetterTwo("напишите функцию calculateAverage"));
