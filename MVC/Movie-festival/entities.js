/*class Genre {
    constructor(name) {
        this.name = name;
        if(!name) {
            throw new Error("Genre required");
        }
    }
    
    getData = function() {
        return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
    }
} */

class Movie {
    constructor (title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        if (!title || !genre || !length) {
            throw new Error('Missing propertied!');
          }
         /* if (!(genre instanceof Genre)) {
            throw new Error('Invalid genre input!');
          }*/
    }

    getGenre() {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length -1].toUpperCase();
        return firstLetter + lastLetter;
    }

    getData() {
        return (this.title + ', ' + this.length + 'min, ' + this.getGenre());
    }
}

/* var orphan = new Movie('orphan', 120, new Genre('horror'));
console.log(orphan); */ 

class Program {
    constructor (date) {
        if (!date) {
            throw new Error('Date missing!');
    }
    this.date = new Date(date);
    this.movieList = [];
    }

    addMovieToList(movie) {
        this.movieList.push(movie);
      }

      getTotalNumOfMovies() {
        return this.movieList.length;
    }

    getTotalMoviesLength() {
        var total = 0;
        this.movieList.forEach(function(movie) {
            total += movie.length;
        });
        return total;
    }
        
    getData() {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var formattedDate = day + "." + month + "." + year;
        var output = formattedDate + ", " + (this.movieList.length) + " movies, duration " + this.getTotalMoviesLength() + "min";
        return output;
    }
   
    chekIfValid() {
        return this.date.getTime();
      }
    
}    


class Festival {
    constructor() {
        this.programList = [];
        this.movieList = [];
    }
   /* addMovieToList(movie) {
        this.listOfMovies.push(movie);
    }
    
    addProgramToList(d) {
        this.listOfPrograms.push(d);
    }*/
}



/*function createMovie(title, length, genre) {
    var genre = new Genre(genre);
    var movie = new Movie(title, genre, length);
    return movie;
}

function createProgram(date) {
    return new Program(date);
}*/ 


