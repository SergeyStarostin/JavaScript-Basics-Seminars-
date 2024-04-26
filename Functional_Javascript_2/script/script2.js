// Задание 2

/* Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating. */

const animal = {
  name: "животное",
  eat() {
    return `${this.name}  ест`;
  },
};
const Dog = {
  name: "",
  bark() {
    return ` ${this.name} лает`;
  },
  //eat () {
  //return `${this.name}  ест`;},
};

Dog.name = "Rex";
Dog.eat = animal.eat;
console.log(Dog);
