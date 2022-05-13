'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('right');
    } else {
        console.log('wrong');
        i--;
    }
}


if (personalMovieDB.count < 10) {
    alert('просмотрено довольно мало фильмов');
    console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert('вы классический зритель');
    console.log('просмотрено довольно много фильмов');
} else if (personalMovieDB.count >= 30) {
    alert('вы киноман');
    console.log('вы киноман');
} else {
    alert('произошла ошибка');
}




console.log(personalMovieDB);