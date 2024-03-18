// Задание 1:
/*1. Создать две переменные и спросить у пользователя значения для данных
переменных. Одна переменная будет хранить имя пользователя, другая его возраст.*/
const firstName = prompt("Введите имя");
const userAge = +prompt("Введите возраст");

/*2. Вывести на экран текст:
“Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”*/
console.log(
  `Добро пожаловать, ${firstName}. Ваше количество оборотов вокруг солнца - ${userAge}.`
);

// Задание 2:

/*1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.*/
const numA = 13;
const numB = 5;
const numC = numA % numB;
console.log(`остаток от деления = ${numC}`); //3

/*2. Что выведет на экран (Сначала проговорите, потом проверьте)*/
let y;
alert(y); //undefined

/*3. Что выведет на экран (Сначала проговорите, потом проверьте)*/
alert("abc" * 3); //NaN

/*4. Что выведет на экран (Сначала проговорите, потом проверьте)*/
alert(1 / 0); //Infinity
alert(-1 / 0); //-Infinity

/*5. Что выведет на экран (Сначала проговорите, потом проверьте)*/
alert("2" * "3"); //6

// Задание 3:
/*1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. 
Определите, в какой строке кода случилась ошибка.*/
//const a; // Missing initializer in const declaration
//alert(a) // a is not defined

// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
const a = "2";
const b = "3";
console.log(a + b);

/*3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
текст ниже, одной строкой с переносами строк:*/
const t = Number(prompt("Введите первое число"));
const r = Number(prompt("Введите второе число"));
console.log(`Сумма чисел равна ${t + r}`);
console.log(`Разность чисел равна ${t - r}`);
console.log(`Произведение чисел равно ${t * r}`);
console.log(`Частное чисел равно ${t / r}`);
console.log(`Остаток от деления чисел равен ${t % r}`);

// Задание 4:
/* 1. Не запуская код, определите, что выводится в консоль:*/

console.log(String(true)); //true
console.log("a" + true); //atrue
console.log(Number(true)); //1
console.log(true + 1); //2
console.log(true + true); //2
console.log(true - true); //0
console.log(String(true) + Number(true)); //true1

// Задание 5:
/* 1. Пользователь с клавиатуры вводит число. Необходимо создать условный оператор, 
который выведет одну из следующих строк в консоль: “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.*/
const number = Number(prompt("Введите число: "));
if (!Number.isFinite(number)) {
  console.log("error");
} else if (number === 5) {
  console.log("Число равно 5");
} else if (number > 5) {
  console.log("Число больше 5");
} else {
  console.log("Число меньше 5");
}

/* 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.*/
const test1 = 10;
const test2 = 10;
if (test1 === test2) {
  console.log("равны");
} else {
  console.log("не равны");
}

/*test1 === test2 ? console.log("равны") : console.log("не равны");
console.log(test1 === test2 ? "равны" : "не равны");*/

/* 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
чисел минимальное и вывести в консоль строку “Минимальное число `число`”.*/
const firstNum = Number(prompt("Введите первое число:"));
const secondNum = Number(prompt("Введите второе число:"));
console.log(
  firstNum < secondNum
    ? `Минимальное число ${firstNum}`
    : `Минимальное число ${secondNum}`
);
console.log(
  `Минимальное число ${firstNum < secondNum ? firstNum : secondNum}`
);

/* 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
Если пользователь ввел значение, о котором его попросили, необходимо вывести
сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
“А вы, я смотрю, хулиганите! `число` - неверное значение.”*/
const input = +prompt("Введите число >0 и <15 ");
const inputNumber = Number(input);
if (number <= 0 || number >= 15) {
  console.log(`А вы, я смотрю, хулиганите! ${number} - неверное значение.`);
} else {
  console.log(`Спасибо за число ${number}.`);
}

// Второй вариант решения:
if (inputNumber > 0 && inputNumber < 15) {
  console.log(`Спасибо за число ${inputNumber}.`);
} else {
  console.log(`А вы, я смотрю, хулиганите! ${input} - неверное значение.`);
}

const firstNumber = +prompt("Введите первое число:");
const secondNumber = +prompt("Введите второе число:");
console.log(
  firstNumber < secondNumber
    ? `Минимальное число ${firstNumber}`
    : `Минимальное число ${secondNumber}`
);
console.log(
  `Минимальное число ${firstNumber < secondNumber ? firstNumber : secondNumber}`
);

// Вариант с функцией:
function summNumbers(a, b) {
  return a + b;
}
const firstNumber1 = Number(prompt("Введите первое число:"));
const secondNumber2 = Number(prompt("Введите второе число:"));

console.log(summNumbers(firstNumber1, secondNumber2));

// Вывод гна экран сотню, десяток, еденицу:
const num = 567;
console.log(Math.trunc(num / 100) % 10);
console.log(Math.trunc(num / 10) % 10);
console.log(num % 10);
