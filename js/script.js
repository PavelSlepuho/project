let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
// console.log(personalMovieDB);
// console.log(personalMovieDB.count);

let a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
