const Cinema = function (films) {
  this.films = films;
}

Cinema.prototype.filmTitles = function() {
  return this.films.map( film => film.title );
}

Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.find( film => film.title === title);
}

Cinema.prototype.filmByYear = function(year) {
  const films = this.films.filter( film => film.year === year);
   return (films.length !== 0) ? films : false;
   }

Cinema.prototype.filmByLength = function(runningTime) {
  return this.films.filter( film => film.length > runningTime);
}

Cinema.prototype.filmsTotalLength = function() {
  const filmTimes =  this.films.map( film => film.length );
   const total = filmTimes.reduce((runningTotal, time) => {
     return runningTotal + time;
 });
   return total;
}

Cinema.prototype.filmsByProperty = function(filmProperty, searchedValue) {
  return this.films.filter( film => film[filmProperty] === searchedValue);
}


module.exports = Cinema;
