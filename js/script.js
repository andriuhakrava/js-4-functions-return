// 1. Створіть функцію, що повертає протилежне значення х. Результат виводьте в консоль:

let x = 5;
function oppositeValue(x){
	return -x;
}

console.log(`x = ${x}, протилежне значення x = ${oppositeValue(x)}`);
x = -4;
console.log(`x = ${x}, протилежне значення x = ${oppositeValue(x)}`);

/* 2. Створіть функцію, що розраховує об'єм коробки і повертає результат розрахунку.
Розміри коробки x, y та z питайте у користувача за допомогою prompt */

let length = +prompt('Введіть довжину коробки в сантиметрах:') || 0;
console.log(`Довжина коробки: ${length} см`);
let width = +prompt('Введіть ширину коробки в сантиметрах:') || 0;
console.log(`Ширина коробки: ${width} см`);
let height = +prompt('Введіть висоту коробки в сантиметрах:') || 0;
console.log(`Висота коробки: ${height} см`);

function boxSize(length, width, height){
	let result = length * width * height;
	return console.log(`Результат обчислення об'єму коробки: ${result} см.куб.`);
}

boxSize(length, width, height);

/* 3. Створіть функцію, що повертає одне зі значень:
	x більше 20 - квадрат цього числа
	х менше 0 - куб цього числа
	х дорівнює 0 - null
	x від 0 до 20 і парне - половину цього числа
	x від 0 до 20 і непарне - потрійне число (наприклад, x = 17, результат = 171717) */

function returnFunny(num){
	if (num > 20) {
		num = Math.pow(num, 2);
	} else if (num < 0) {
		num = Math.pow(num, 3);
	} else if (num === 0) {
		num = null;
	} else if (num % 2 === 0) {
		num /= 2;
	} else if (num % 2 !== 0) {
		num = '' + num + num + num;
	} else {
		console.log('Please, paste valid value!');
	}
	return num;
}

let num = 22;
console.log(`x більше 20, значення: ${num} - квадрат числа = ${returnFunny(num)}`);
num = -5;
console.log(`х менше , значення: ${num} - куб цього числа: ${returnFunny(num)}`);
num = 0;
console.log(`х дорівнює 0, значення: ${num} - null: ${returnFunny(num)}`);
num = 16;
console.log(`x від 0 до 20 і парне, значення: ${num} - половину цього числа: ${returnFunny(num)}`);
num = 17;
console.log(`x від 0 до 20 і непарне, значення: ${num} - потрійне число: ${returnFunny(num)}`);
num = 'hello';
console.error(`Некоректне значення: - ${returnFunny(num)}`);

/* 4. Створіть функцію, яка запитує в користувача його ім'я (prompt) і повертає вітання виду: 
			"Ласкаво просимо, %username% !".
			Викличте цю функцію для того, щоб задати текст для <h1> сторінки: */

function greetingFun(){
	let username = prompt('Введіть ваше ім\'я'); 
	let greeting = 'Ласкаво просимо ';
	if (username === null || username === '') greeting += 'незнайомцю';
	else greeting += username;
	return greeting + '!';
}

document.querySelector('h1').innerText = greetingFun();

/* 5. Дано кнопку і чотири текстових поля: first-name, last-name, phone, email 
		(не огортайте їх в тег form, нам поки що не потрібно нічого відправляти на сервер).
		Створіть функцію валідації форми - перевірки на те, чи немає пустих полів.
		Якщо пустих полів немає, то функція повинна повертати true, інакше - false;
		Валідацію виконуйте при натисканні на кнопку.*/

		let btn = document.getElementById('btn');

		btn.addEventListener('click', function(){console.log(validateForm());});

		function validateForm(){
			let firstname = document.querySelector('[name="first-name"]').value;
			let lastname = document.querySelector('[name="last-name"]').value;
			let phone = document.querySelector('[name="phone"]').value;
			let email = document.querySelector('[name="email"]').value;
			
			return firstname && lastname && phone && email;
		}

