// Задание 4

/* Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение с представлением
имени и возраста персоны.
const person = new Person("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old. */

class PersonOne {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
  }
}
const Ivan = new PersonOne ("Ivan", 18);

console.log(Ivan);
console.log(Ivan.name);
console.log(Ivan.age);
console.log(Ivan.introduce());

// второй способ
class personTwo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
      console.log(`Hello, ${this.name}! Your age is ${this.age}`);
    };
  }
}

const Kolya = new personTwo("Kolya", 25);
Kolya.greeting();
