// recipeRepository function (IIFE)
let recipeRepository = (
  function() {
    // the first object ( recipeList[0] ) is used as validation for the 'addv()' method
    let recipeList = [
      {
        name: 'Snowcrab Legs',
        description: "Snowcrab legs are the most delicious thing ever. They are super easy to steam or bake!",
        categories: ['seafood', 'healthy', 'meat'],
        ingredients: ['crab', 'butter', 'garlic powder'],
        price: '$$$', // could be calculated on the fly with ingredient prices and a formula...
        recipe: [],
        rating: 10,
        reviews: [{},{}]
      }
    ];

    // 'add' pushes one argument to the recipeList array WITHOUT validation
    function add(recipe) {
      recipeList.push(recipe);
      console.log(`${recipe.name} recipe added!`);
    }

    // 'addv' pushes input to the recipeList array WITH validation
    // the first object in recipeList is considered 'valid'
    // the 'every' method is used to compare the sorted 'input' argument with sorted 'validInput' (comparing sorted 'Object.keys()' arrays) and returns a boolean
    function addv(input) {
      let validInput = Object.keys(recipeList[0]).sort();

      if(typeof(input) == 'object') {
        let inputArray = Object.keys(input).sort();

        if(inputArray.every((value, index) => value === validInput[index])) {
          recipeRepository.add(input);
        } else {
          console.log(`input=${input.name} is an object with incorrect keys...`)
        }

      } else {
        console.log(`input=${input} was not valid.`)
      }
    }

    // returns the recipeList array
    function getAll() {
      return recipeList;
    }

    function appendrecipe(recipe) {
      let parentElement = document.querySelector('.container');
      let element = document.createElement('div');
      let elementString = `${recipe.name}\nCategories: ${recipe.categories}\nPrice: ${recipe.price}\nRating: ${recipe.rating} ${phraseRating(recipe.rating)}\n`;

      element.innerText = elementString;
      element.classList.add('recipeTile');
      parentElement.appendChild(element);
    }

    function phraseRating(rating) {
      let phrase;
      
      if (rating >= 8) {
        phrase = `This is awesome!`;
      } else if (rating < 8 && rating >= 5) {
        phrase = `This is pretty good!`;
      } else if (rating < 5 && rating >= 3){
        phrase = `This is not very good...`;
      } else {
        phrase = `GROSS!`;
      }

      return phrase;
    }

    // this function takes a query string and returns a filtered array from recipeList names
    function filterByName(query){
      let nameArray = [];
      recipeList.forEach(el => nameArray.push(el.name));
      return nameArray.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    }

    // only the things in this returned object are accessible outside the scope of this function
    return {
      add: add,
      addv: addv,
      getAll: getAll,
      appendrecipe: appendrecipe,
      phraseRating: phraseRating,
      filterByName: filterByName
    }
  }
)();

// This loop evaluates the height of each pokemon in the pokemonList array and writes a string to the document.
// the 'poke' value is set to pokemon object at the current index
// the 'phrase' value is determined by the pokemon's height

recipeRepository.addv('rat-stew');

recipeRepository.addv(
  {
    name: 'mouse-stew',
    categories: ['gross', 'made with dead mice'],
    price: '$',
    rating: 2,
    reviews: [],
    description: '',
    ingredients: [],
    recipe: []
  }
);

recipeRepository.addv(
  {
    name: 'apple-pie',
    categories: ['gross', 'made with dead mice'],
    price: '$',
    rating: 2,
    reviews: [],
    description: '',
    ingredients: [],
    recipe: []
  }
);

recipeRepository.addv({name: "cereal", rating: 7.9, price: '$', categories:['cheap']});

recipeRepository.addv(
  {
    name: 'dog-stew',
    categories: [],
    price: '$',
    rating: 3
  }
);

recipeRepository.addv(
  {
    name: 'poisonous mushrooms flambee',
    categories: [],
    price: 'free in the woods',
    rating: 1
  }
);

recipeRepository.addv(
  {
    name: 'blue mushrooms',
    categories: ['blue'],
    price: 'free in the woods',
    rating: 1
  }
);

recipeRepository.getAll().forEach(
  function(recipe) {
    recipeRepository.appendrecipe(recipe);
    }
);

document.write(`<br>Search Results: ${recipeRepository.filterByName('e')}`);
