//Задание 3 (Принцип замыкания)

/* Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2 */

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3, 3])); // Вывод: 2

const obj = {
  num1: 20,
  num2: 10,
};
// const obj2 = {
//     num1: 20,
//     num2: 10,
//   };

console.log(calculator.add.call(obj, obj.num1, obj.num2));
console.log(calculator.add.call(obj.num1, obj.num2));
console.log(calculator.add(obj, obj.num1, obj.num2));
