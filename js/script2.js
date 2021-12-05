'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) == true) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else {
            alert('Вы киноман!');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        let genre;
            for (let index = 1; index <= 3; index++) {
                genre = prompt(`Ваш любимый жанр под номером ${index}?`, '');
                if (genre != '' && genre != null) {
                personalMovieDB.genres[index - 1] = genre;
            } else {
                index--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
        personalMovieDB.showMyDB();
    },
};

// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// console.log(personalMovieDB);

// let rrr = [ ] + false - null + true;
// console.log(rrr);

// let y = 1; let x = y = 2; alert(x); 

// let yz = [ ];
// console.log(yz);

// alert( "1"[0] );

// let tt = 2 && 1 &&null&& 0 &&undefined;
// console.log(tt);

// let dd = !!( a && b ),
//     ff = (a && b);
// console.log(dd);
// console.log(ff);

// alert( null || 2 && 3 || 4 ); 

// let a = [1, 2, 3],
//     b = [1, 2, 3]; 
// console.log(a == b);

// alert( +"Infinity" );

// console.log(0 || "" || 2 || undefined || true || falsе );
