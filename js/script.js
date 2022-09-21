'use strict';
console.log(1);
const number0film = +prompt("Сколько фильмов ты уже посмотрел?", "");
console.log(number0film);
const personalMovieDB = {
    count: number0film,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};
const a = prompt("Один из последних просмотернных фильмов?", "");
const b = prompt("На сколько его оцените?", "");
const c = prompt("Один из последних просмотернных фильмов?", "");
const d = prompt("На сколько его оцените?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

