//Задание 3 (Принцип замыкания)

/* 1. Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а метод 
subtract должен уменьшать значение на переданное число. Значение должно 
быть доступно только через методы объекта, а не напрямую. */
function createCalculator(def) {
  return {
    value: def,
    add(num) {
      return (this.value += num);
    },
    subtract(num) {
      return (this.value -= num);
    },
  };
}
const numberResult = createCalculator(10);
console.log(numberResult.add(5));
console.log(numberResult.subtract(3));
