// pokemonRepository function (IIFE)
let pokemonRepository = (function () {
  // the first object ( pokemonList[0] ) is used as validation for the 'addv()' method
  let pokemonList = [];
  let limit = 150;
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=' + limit;

  function loadList() {
    showLoadingMessage();

    return fetch(apiUrl).then(function (response) {
      return response.json();
      
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });

      hideLoadingMessage();

    }).catch(function(e) {
      console.error(e);
      hideLoadingMessage();
    });
  }

  // fetches details from an object with a "detailsUrl"
  function loadDetails(item) {
    let url = item.detailsUrl;

    showLoadingMessage();

    return fetch(url).then(function (response) {
      return response.json();

    }).then(function (details) {
      // now add details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    
      hideLoadingMessage();
    }).catch(function (e) {
      console.error(e);
      hideLoadingMessage();
    });
  }
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon)}).catch(function () {
        console.log(`failed to show ${pokemon}`);
      });
    }
    
  function addListItem(pokemon) {
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = `${pokemon.name}`;
    button.classList.add('pokemonTile');
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
      });

    listItem.appendChild(button);
    document.querySelector('.pokemon-list').appendChild(listItem);
  }
    
  // pushes a pokemon object with validated key names to the pokemonList array
  function add(pokemon) {
    if (
      typeof(pokemon) === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    }else{
      console.log(`failed to add ${pokemon}`);
    }
  }

  // returns the pokemonList array
  function getAll() {
    return pokemonList;
  }

  function showLoadingMessage() {
    let element = document.createElement('div');

    element.classList.add('loading-message');
    element.innerText = 'Rounding up those pesky Pokemon...';
    document.querySelector('ul.pokemon-list').appendChild(element);
  }

  function hideLoadingMessage() {
    let element = document.querySelector('div.loading-message');
    document.querySelector('ul.pokemon-list').removeChild(element);
  }
  
  // evaluates the height and returns a string
  function phraseHeight(height) {
    let phrase;
    
    if (height >= 6) {
      phrase = `This thing's HUGE! O_O`;
    } else if (height < 6 && height >= 4) {
      phrase = `That's about average o_o`;
    } else if (height < 4 && height >= 2){
      phrase = `Kind of a shorty -_-`;
    } else {
      phrase = `What a tiny little Pokemon! ^o^`;
    }
    
    return phrase;
  }

  // ! -- only the things in this returned object are accessible outside the scope of this function
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    phraseHeight: phraseHeight,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showLoadingMessage: showLoadingMessage
  }
})();

pokemonRepository.loadList().then(function() {
  //data loaded in from API
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});
