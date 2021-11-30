'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) == true) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// let a = prompt("Один из последних просмотренных фильмов?", ''),
//     b = prompt("На сколько оцените его?");
    // c = prompt("Один из последних просмотренных фильмов?", ''),
    // d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

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

// let i = 0;
// while (i < 2) {
//     let a = prompt("Один из последних просмотренных фильмов?", ''),
//         b = prompt("На сколько оцените его?");
//     personalMovieDB.movies[a] = b;  
//     i += 1;  
// }
// console.log(personalMovieDB);



// let i = 0;

// do {
//     let a = prompt("Один из последних просмотренных фильмов?", ''),
//         b = prompt("На сколько оцените его?");
//     personalMovieDB.movies[a] = b;
//     i++;
// } while (i < 2);

// console.log(personalMovieDB);

// let b = '';
// for (let i = 0; i < 7; i++) {
//     b = b + '#';
//     console.log(b);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log(`${i} Fizz`);
//     } else if (i % 5 == 0 && i % 3 != 0) {
//         console.log(`${i} Buzz`);
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} FizzBuzz`);
//     } else {
//         console.log(i);
//     }
// }

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let index = 1; index <= 3; index++) {
        let genre = prompt(`Ваш любимый жанр под номером ${index}?`, '');
        personalMovieDB.genres[index - 1] = genre;
    }
}

writeYourGenres();