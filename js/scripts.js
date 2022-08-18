// mealRepository function (IIFE)
let mealRepository = (
  function() {
    let mealList = [
      {
        price: '$$$',
        name: 'Steamed Snowcrab Legs',
        categories: ['seafood', 'healthy', 'meat'],
        rating: 10
      }
    ];

    // 'add' pushes one argument to the mealList array WITHOUT validation
    function add(meal) {
      mealList.push(meal);
      console.log(`${meal.name} meal added!`);
    }

    // 'addv' pushes input to the mealList array WITH validation
    // the first object in mealList is considered 'valid'
    // the 'every' method is used to compare the sorted 'input' argument with sorted 'validInput' (comparing sorted 'Object.keys()' arrays) and returns a boolean
    function addv(input) {
      let validInput = Object.keys(mealList[0]).sort();

      if(typeof(input) == 'object') {
        let inputArray = Object.keys(input).sort();

        if(inputArray.every((value, index) => value === validInput[index])) {
          mealRepository.add(input);
        } else {
          console.log(`input=${input.name} is an object with incorrect keys...`)
        }

      } else {
        console.log(`input=${input} was not valid.`)
      }
    }

    // returns the mealList array
    function getAll() {
      return mealList;
    }

    function writeMeal(meal) {
      document.write(`${meal.name}<br>`);
      document.write(`Price: ${meal.price}<br>`);
      document.write(`Rating: ${phraseRating(meal.rating)}<br>`);
    }

    function phraseRating(rating) {
      let phrase;
      
      if (rating >= 8) {
        phrase = `"${rating}" This is awesome!`;
      } else if (rating < 8 && rating >= 5) {
        phrase = `"${rating}" this is pretty good!`;
      } else if (rating < 5 && rating >= 3){
        phrase = `"${rating}" this is not very good...`;
      } else {
        phrase = `"${rating}" GROSS!`;
      }

      return phrase;
    }

    // this function takes a query string and returns a filtered array from mealList names
    function filterByName(query){
      let nameArray = [];
      mealList.forEach(el => nameArray.push(el.name));
      return nameArray.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    }

    // only the things in this returned object are accessible outside the scope of this function
    return {
      add: add,
      addv: addv,
      getAll: getAll,
      writeMeal: writeMeal,
      phraseRating: phraseRating,
      filterByName: filterByName
    }
  }
)();

// This loop evaluates the height of each pokemon in the pokemonList array and writes a string to the document.
// the 'poke' value is set to pokemon object at the current index
// the 'phrase' value is determined by the pokemon's height

mealRepository.addv('rat-stew');

mealRepository.addv(
  {
    name: 'mouse-stew',
    cccategories: ['gross', 'typo'],
    price: '$',
    rating: 2
  }
  );

mealRepository.addv({name: "cereal", rating: 7.9, price: '$', categories:['cheap']});

mealRepository.addv(
  {
    name: 'dog-stew',
    categories: [],
    price: '$',
    rating: 3
  }
);

mealRepository.addv(
  {
    name: 'poisonous mushrooms flambee',
    categories: [],
    price: 'free in the woods',
    rating: 1
  }
);

mealRepository.addv(
  {
    name: 'blue mushrooms',
    categories: ['blue'],
    price: 'free in the woods',
    rating: 1
  }
);

mealRepository.getAll().forEach(
  function(meal) {
    mealRepository.writeMeal(meal);
    }
);

document.write(`<br>Search Results: ${mealRepository.filterByName('mushroom')}`);