/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

/* function first() {
    //Do something

    setTimeout(function () {
        console.log(1);
    }, 500)
}

function second() {
    console.log(2)
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn : ${lang}`);
    callback();
}

function done() {
    console.log('I finished this lesson');
}

learnJS('JavaScript', done); */

/* const obj = new Object();
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('Test');
	}
}; */

//options.makeTest();
/* 
const { border, bg } = options.colors;
console.log(border);
console.log(bg) */ /* console.log(options.name);

delete options.name;

console.log(options); */

/* let counter = 0;
for (let key in options) {

    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Properties ${i} have a value ${options[key][i]}`);
            //counter++;
        }
    } else {
        console.log(`Properties ${key} have a value ${options[key]}`);
        counter++;
    }
} */

//console.log(counter)

//console.log(Object.keys(options).length);

let string = "DfdfdfD Ddfdf D fd";
/*let newString;
for (let value of string) {
    console.log(string);
}

console.log(newString); */

//const arr = [ 1, 2, 3, 4, 6, 10 ];

/* arr.pop();
arr.push(10);

console.log(arr);

for (let value of arr) {
    console.log(value);
} */

/* arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} in a ${arr}`);
}); */

/* for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] === 'd') {
        toUpperCase(string[i]);
    }
}

console.log(string); */
/* 
const str = prompt('', '');

const products = str.split(',');
console.log(products);
 */
