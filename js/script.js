const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");         //создана константа с вопросом user's

const personalMovieDB = {
    count: number0fFilms,       //сюда будет складываться ответ пользователя
    movies: {},                 
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),   //создал еще несколько вопросов пользователю
      b = +prompt("на сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),   
      d = +prompt("на сколько оцените его?", "");                 

personalMovieDB.movies[a] = b;            //указал, чтобы ответы констант складывались в movies
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);    //вывел в консоль для проверки