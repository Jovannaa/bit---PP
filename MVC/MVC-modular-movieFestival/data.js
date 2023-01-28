var dataModule = (function () {
    var festival = createFestival();

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        if (!title || !genre || !length) {
            throw new Error('Missing propertied!');
        }
    };

    Movie.prototype.getGenre = function() {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length -1].toUpperCase();
        return firstLetter + lastLetter;
    };

    Movie.prototype.getData = function() {
        return (this.title + ', ' + this.length + 'min, ' + this.getGenre());
    };

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    };

    function addMovieToProgram(movie) {
        return festival.listOfAllMovies.push(movie) - 1;
    }


    function Program(date) {
        if (!date) {
            throw new Error('Date missing!');
    }
    this.date = new Date(date);
    this.movieList = [];
    };

    Program.prototype.addMovieToLis = function() {
        this.movieList.push(movie);
    };

});