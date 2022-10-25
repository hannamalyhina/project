// 'use strict';
// console.log(1);
// const number0film = +prompt("Сколько фильмов ты уже посмотрел?", "");
// console.log(number0film);
// const personalMovieDB = {
//     count: number0film,
//     movies: {},
//     actors: {},
//     gentres: [],
//     privat: false
// };
// const a = prompt("Один из последних просмотернных фильмов?", "");
// const b = prompt("На сколько его оцените?", "");
// const c = prompt("Один из последних просмотернных фильмов?", "");
// const d = prompt("На сколько его оцените?", "");
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j<i; j++){
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);

// for (let i = 5; i < 11; i++){
//     console.log(i);   
// }

// for (let i = 20; i > 11; i--){
//     if (i == 13) break;
//     console.log(i);
// }

// for (let i = 2; i < 11; i++){
//     if (i % 2 === 0)
//     console.log(i);
// }
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// const arrayOfNumbers = [];
// for (i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i
//     console.log(arrayOfNumbers);
// }

function calc(num1, num2) {
    const arrayOfNumbers = [];

    for (let i = num1; i < num2; i++) {
        arrayOfNumbers[i - num1] = i;
        // console.log(arrayOfNumbers);
    }
    if (num1 > num2) {
        return 0;
    }
    if (num1 === num2) {
        num2 += 0.1;
    }

    // Не трогаем
    return num1 + num2 * num2 / 5 * 24.5;
}

calc(3, 5);
// const num1 = 23, num2 = 15;
// const result = calc(num1, num2);

// if (result === 0) {
//     console.log([1,2,3]);
//     // return;
// }

// console.log('result ' + result);



// console.log(calc(5, 11));
// console.log(calc(-2, 5));
// console.log(calc(3, 12));

function isEmailValid(email) {
    if (email.includes('@')) {
        return true;
    }

    return false;
}

console.log(isEmailValid('msakldm@sd.sd'));
console.log(isEmailValid('msakldmsd.sd'));


'use strict';
// let result = '';
// const lenght = 7;
// for(let i = 1; i < lenght; i++){

// for(let j = 0; j < i; j++){
// result += "*";
// }

// result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
// console.log(`First level: ${i}`);
// for (let j = 0; j < 3; j++) {
// console.log(`Second level: ${j}`);
// for (let k = 0; k < 3; k++) {
// if (k === 2) break first;
// console.log(`Third level: ${k}`);
// }
// }
// }

// for (let i = 20; i > 9; i--) {
// console.log(i);
// if (i == 13) break;
// }

for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
    i++;
}

let arr = [];
for (let i = 5; i < 10; i++) {
    arr[i - 5] = i;
}
console.log(arr);

const arr = [3, 5, 8, 16, 20, 23, 50];
console.log(arr.length);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) == 'number') {
        data[i] = data[i] * 2;
    } else if (typeof (data[i]) == 'string') {
        data[i] = (data[i] + '-' + 'data');
    }
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) == 'number') {
        data[i] = data[i] * 2;
    } else if (typeof (data[i]) == 'string') {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);


const lines = 5;
let result = '';
for (let i = 1; i <= lines; i++) {
    let spacesCount = (((lines * 2)) - i * 2) / 2;
    result = result + ' '.repeat(spacesCount) + '*'.repeat(i * 2 - 1) + '\n';
}
console.log(result); 