'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) == true) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?");
        if (a == "" || b == "" || a.length > 50 || a == null || b == null || b < 0 || b > 10) {
            console.log("ERROR");
            i--;
        } else {
            personalMovieDB.movies[a] = b; 
        }
    }
    console.log(personalMovieDB);
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман!');
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let index = 1; index <= 3; index++) {
        let genre = prompt(`Ваш любимый жанр под номером ${index}?`, '');
        personalMovieDB.genres[index - 1] = genre;
    }
}

// writeYourGenres();
