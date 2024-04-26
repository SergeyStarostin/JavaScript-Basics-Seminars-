// Задание 1

/* 1. Создайте функцию mergeArrays, которая принимает два массива и 
возвращает новый массив, содержащий все элементы из обоих массивов. 
Используйте spread оператор для объединения массивов. 
mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6] */
const mergeArrays = (arrOne, arrTwo) => [...arrOne, ...arrTwo];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

/* 2. Создайте функцию removeDuplicates, которая принимает любое 
количество аргументов и возвращает новый массив, содержащий только 
уникальные значения. Используйте rest оператор для сбора всех 
аргументов в массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); 
// Ожидаемый результат: [1, 2, 3, 4, 5]*/
function removeDuplicates(...arrays) {
  return arrays.filter((elem, id) => {
    return arrays.indexOf(elem) === id;
  });
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// второй способ с помощью newset
function removeDuplicatesTwo(...arrays) {
  const uniqArray = [...new Set(arrays)];
  return uniqArray;
}
console.log(removeDuplicatesTwo(1, 2, 3, 2, 4, 1, 5));
