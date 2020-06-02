'use strict';
/*****Learn JavaScript */
/* let a = (1, 5 - 1) * 2;

alert(a); */

/* let sillyString = 'hAy, hoW Are yOu!';
let lowerCase = sillyString.toLowerCase();
console.log(lowerCase);
let newString = lowerCase.split(' ');

/* for (let i = 0; i <= sillyString.length; i+=){

} */
/* let firstWord = newString[0];
let firstLetter = firstWord[0].toUpperCase();
console.log(firstLetter);
let newWord = ;
console.log(newWord); */
/* let randomBodyParts = [ 'eyes', 'nose', 'skull' ];
let randomAdjectives = [ 'вонючая', 'унылая', 'дурацкая' ];
let randomWords = [ 'муха', 'выдра', 'дубина', 'мартышка', 'крыса' ];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)]; */

/* let randomInsult = 'You have a ' + randomBodyPart + ' like as ' + randomAdjective + ' ' + randomWord + '!!!'; */

/* let randomInsult = [ 'You have a', randomBodyPart, 'like as', randomAdjective, randomWord, '!!!' ].join(' ');

console.log(randomInsult); */

/* let arr = [ 3, 2, 1 ].join(' больше,' + ' чем' + ' ');

console.log(arr); */

/* function camelize(str) {
	//let newCamelCase;
	return str.split('-').map((word, index) => (0 ? word : word[0].toUpperCase() + word.slice(1))).join('');
}

let newWord = 'background-color';

console.log(camelize(newWord)); */

/* let admin, name;
name = 'John';
admin = name;

console.log(admin);

let planet = 'Earth'; // ourPlanetName
let userName; // currentUserName */

/* let name = 'Ilya';
alert(`hello ${1}`); // hello 1
alert(`hello ${'name'}`); // hello name
alert(`hello ${name}`); // hello Ilya */

/* console.log('' + 1 + 0); // 10
console.log('' - 1 + 0); // -1
console.log(true + false); //1
console.log(6 / '3'); // 2
console.log('2' * '3'); // 6
console.log(4 + 5 + 'px'); //45px -> 9px!
console.log('4' - 2); // 2
console.log('$' + 4 + 5); // $45
console.log('4px' - 2); // 4px2 -> NaN!
console.log(7 / 0); // Infinity
console.log('  -9  ' + 5); // -9 5!
console.log('  -9  ' - 5); // - 14
console.log(null + 1); // 1
console.log(undefined + 1); //Infinity -> NaN!
console.log(' \t \n' - 2); // -2 */

/* let a = 1;
let b = 1;

let c = ++a;
let d = b++;

console.log(a); //2
console.log(b); //2
console.log(c); //2
console.log(d); //1 */

/* let a = 2;
let x = 1 + (a *= 2);

console.log(a); // 4
console.log(x); // 5 */

/* console.log(5 > 4); // true
console.log('ананас' > 'яблоко'); //false
console.log('2' > '12'); //true 1...2..9,10,11,12.13
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log(null == '\n0\n'); // false
console.log(null === +'\n0\n'); // false */

/* let userName = prompt('What is your name?', '');
alert(userName); */

/* if ('0') {
	alert('Hello');
} */

//console.log('Hi');

//alert('Hello');

/* const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('What is your age?', ''); */

//document.write(answers.join(' '));

/* let num = +prompt('Choose a number', 0);

if (num > 0) {
	alert(1);
} else if (num < 0) {
	alert(-1);
} else {
	alert(0);
} */

/* let result;

if (a + b < 4) {
	result = 'Small';
} else {
	result = 'Big';
} */

//let result = a + b < 4 ? 'Small' : 'Big';

/* let message =
    login == 'Сотрудник' ? 'Привет' : login == 'Сотрудник' ? 'Здравствуйте' : login == '' ? 'Нет логина' : ' '; */

//alert(null || 2 || undefined); // true
//alert(alert(1) || 2 || alert(3));

//alert(1 && null && 2);

//alert(alert(1) && alert(2));

//alert(null || (2 && 3) || 4);

/* if (age >= 14 && age <= 90 {

}

if (!(age <= 14 && age <= 90));
if (age < 14 || age > 90); */

/* if (-1 || 0) alert('first'); // true
if (-1 && 0) alert('second');
if (null || (-1 && 1)) alert('third'); // true */

/* let login = prompt('How is it?', '');

if (login == 'Admin') {
	let password = prompt('Password', '');
	if (password == 'I am the chief') {
		alert('Hello');
	} else if (password === null || password === ' ') {
		alert('cancel');
	} else {
		alert('wrong password');
	}
} else if (login === null || login === ' ') {
	alert('cancel');
} else {
	alert('I don`t know you');
} */

/* let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {Admin
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
 */

//Задание на урок:

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('error');
}

console.log(personalMovieDB);
