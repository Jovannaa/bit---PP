var festival = new Festival();

var createMovieButton = document.querySelector('#create-movie');
var createProgramButton = document.querySelector('#create-program');
var addMovieToProgramButton = document.querySelector('#add-movie');
var inputTitleElement = document.querySelector('#title');
var inputLengthElement = document.querySelector('#length');
var selectGenreElement = document.querySelector('#genre');
var movieErrorElement = document.querySelector('#movie-error');
var ulMovieListElement = document.querySelector("#movie-list");
var inputDateElement = document.querySelector('#date');
var selectMovieElement = document.querySelector('#movie-select');
var selectProgramElement = document.querySelector('#program-select');
var programErrorElement = document.querySelector("#program-error");
var ulProgramListElement = document.querySelector("#program-list");

function createMovie() {
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = selectGenreElement.value;

    if (!titleValue) {
        movieErrorElement.textContent = 'Title is required!';
        return;
    }

    if (!lengthValue) {
        movieErrorElement.textContent = 'Length is required!';
        return
    }

    if (!genreValue) {
        movieErrorElement.textContent = 'Genre is required!';
        return
    }


    movieErrorElement.textContent = "";

    var movie = new Movie(titleValue, Number(lengthValue), genreValue);
    festival.movieList.push(movie);

    var movieDataLi = document.createElement('li');
    movieDataLi.textContent = movie.getData();
    ulMovieListElement.appendChild(movieDataLi);

    var movieOption = document.createElement('option');
    movieOption.textContent = movie.title;
    var index = festival.movieList.length - 1;
    movieOption.setAttribute('value', index);
    selectMovieElement.appendChild(movieOption);


    inputTitleElement.value = "";
    inputLengthElement.value = "";
    selectGenreElement.value = "";
};


function createProgram() {
    var dateInputValue = inputDateElement.value;

    if (!dateInputValue) {
        programErrorElement.textContent = "Please select a date.";
        return;
      };

      var date = new Date(dateInputValue);

      /*if (date.getTime() < Date.now()) {
        programErrorElement.textContent = 'Invalid date!';
        return;
      }
      hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
        return date.getTime() === program.date.getTime();
      });
    
      if (hasProgramWithSameDate) {
        programErrorElement.textContent = 'Program for same date already exists';
        return;
      }
      programErrorElement.textContent = ''; */
        
    var program = new Program(date);
    festival.programList.push(program);

    var index = festival.programList.length - 1;
    var li = document.createElement('li');
    li.setAttribute('id', 'program-item-' + index);
    li.textContent = program.getData();
    ulProgramListElement.appendChild(li);

    var option = document.createElement('option');
    option.setAttribute('value', index);
    option.textContent = program.getData();
    selectProgramElement.appendChild(option);
};

function addMovieToProgram() {
    var movieIndex = selectMovieElement.value;
    var programIndex = selectProgramElement.value;

    if (!movieIndex || !programIndex) {
        movieErrorElement.textContent = 'Invalid input';
        return;
      }

    var movie = festival.movieList[movieIndex];
    var program = festival.programList[programIndex];
    
    program.addMovieToList(movie);
    console.log(movie,program);
    console.log(program.getData());

    var liToUpdateNode = document.querySelector('#program-item-' + programIndex);
    liToUpdateNode.textContent = program.getData();

    selectMovieElement.value = "";
    selectProgramElement.value = ""; 
}

createMovieButton.addEventListener('click', createMovie);
createProgramButton.addEventListener('click', createProgram);
addMovieToProgramButton.addEventListener('click', addMovieToProgram);




