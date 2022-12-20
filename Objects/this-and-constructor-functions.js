// 4th task from "objects-intro"//

function Recipe(recipeName, type, complexity, ingredients, time, instruction) {
    this.name = recipeName;
    this.typeOfCuisine = type;
    this.complexity = complexity;
    this.ingredients = ingredients;
    this.preparinTime = time;
    this.instruction = instruction;

    this.printList = function () {
        console.log(this.ingredients);
    };

    this.checkTime = function () {
        return this.preparinTime < 15;
    };

    this.changeCuisine = function (Newtype) {
        this.typeOfCuisine = Newtype;
    };

    this.deleteIngredient = function (ingredient) {
        var updatedIngredients = [];
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i] !== ingredient) {
          updatedIngredients[updatedIngredients.length] = this.ingredients[i];
        }
      }
      this.ingredients = updatedIngredients;
    }

}

var p = new Recipe (
    'Trikolore',
    'Italian cuisine',
    3,
    ['jaja', 'brasno', 'cokolada'],
    45,
    'umutiti sve sastojke'
);

console.log(p);
p.deleteIngredient('jaja');
console.log(p.checkTime());
console.log(p);


//3th task from "objects-intro"//

function Program (desc, lang, git, devStatus) {
        this.description = desc;
        this.language = lang;
        this.gitRep = git;
        this.status = devStatus;

        this.printGit = function () {
            console.log(this.gitRep);
        },

        this.checkIsJavaScript = function () {
            if (this.language === "JavaScript") {
                return true;
            }
            return false;
        },

        this.checkProject = function () {
            return this.status
        }
    
}


var p = new Program (
    'Some description bla bla',
    'JavaScript',
    'Project is in development'
);

console.log(p);
console.log(p.checkIsJavaScript(''));
console.log(p);