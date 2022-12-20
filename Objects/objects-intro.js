/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var favouriteCoffee = {
    name: 'Nescafe',
    strength: 'Medium',
    flavour: 'Vanilla',
    Milk: true,
    Sugar: true

};


/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity. */

var favouriteMovie = {
    title: 'Orphan',
    actors: ['Isabelle Fuhrman', 'Vera Farmiga'],
    director: 'Jaume Collet-Serra',
    genre: 'Horror',
    popularity: false

};

console.log(favouriteMovie);


/* 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

function getProgram (desc, lang, git, devStatus) {

    var program = {
        description: desc,
        language: lang,
        gitRep: git,
        status: devStatus,

        printGit: function () {
            console.log(program.gitRep);
        },

        checkIsJavaScript: function () {
            if (program.language === "JavaScript") {
                return true;
            }
            return false;
        },

        checkProject: function () {
            return program.status
        }
    }
    return program
    
}




/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function creatRecipe (recipeName, type, complexity, ingredients, time, instruction) {

    var recipe = {
    name: recipeName,
    typeOfCuisine: type,
    complexity: complexity,
    ingredients: ingredients,
    preparinTime: time,
    instruction: instruction,

    printList: function () {
        console.log(recipe.ingredients);
    },

    checkTime: function () {
        return recipe.preparinTime < 15;
    },

    changeCuisine: function (Newtype) {
        recipe.typeOfCuisine = Newtype;
    },

    deleteIngredient: function (ingredient) {
        var updatedIngredients = [];
      for (var i = 0; i < recipe.ingredients.length; i++) {
        if (recipe.ingredients[i] !== ingredient) {
          updatedIngredients[updatedIngredients.length] = recipe.ingredients[i];
        }
      }
      recipe.ingredients = updatedIngredients;
    }

}
return recipe

}


var p = creatRecipe (
    'Trikolore',
    'Italian cuisine',
    3,
    ['jaja, brasno, cokolada'],
    45,
    'umutiti sve sastojke'
);

console.log(p);
p.checkTime();
console.log(p);