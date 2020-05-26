'use strict';
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
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?'),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

/* for (let i = 0; i < 3; i++) {
    let firstQuestion = prompt('Один из последних просмотренных фильмов?');
    movies[firstQuestion];
    let secondQuestion = prompt('На сколько оцените его?');
    movies[secondQuestion];
} */



'use strict';