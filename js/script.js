

let itemRepository = (function(){
  let itemList = [];
  let addItemItem;
  let itemApiUrl = 'https://pokeapi.co/api/v2/item/?limit=50'
 
})

let pokemonRepository = (function () {
    let pokemonList = [];
    let addListItem;
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100";
  
    let modalContainer = document.querySelector("#modal-container");
    let pokemonContainer = document.querySelector('#pokemon-container');
    let listButton = document.querySelector('#pokemon-button');
   
    // Button to open pokemon repository
    function togglePokemonContainer(){
      document.querySelector('.pokemon-list').classList.toggle('hidden');
      console.log('clicked');
    }
    document.querySelector('.pokemon-list').classList.add('hidden');
    listButton.addEventListener('click', togglePokemonContainer);

    let uListItem = document.querySelector("ul");
  

    //show modal with passed details
    function showModal(pokemon, title, text, imageURL) {
      modalContainer.innerHTML = "";
  
      
  
      let modal = document.createElement("div");
      modal.classList.add("modal");
  
      let closeButtonElement = document.createElement("button");
      closeButtonElement.classList.add("modal-close");
      closeButtonElement.innerText = "close";
      closeButtonElement.addEventListener('click', hideModal);
  
      let titleElement = document.createElement("h1");
      titleElement.innerText = pokemon.name;
  
      let contentElement = document.createElement("p");
      contentElement.innerText = text;
  
      let imageElement = document.createElement("img");
      imageElement.classList.add("img");
      imageElement.src = imageURL;
      imageElement.alt = "Pokemon Image";
  
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(imageElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
  
      modalContainer.classList.add("is-visible");
    }
  
    //hide modal
    function hideModal() {
      modalContainer.classList.remove("is-visible");
    }

    modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if (target === closeButtonElement && modalContainer.classList.contains("is-visible")) {
        hideModal();
      }
    });
  
    //search bar 
    const searchBar = document.querySelector('#search');
    searchBar.addEventListener('keyup', searchPokemon)

    function searchPokemon(event){
      const listContainer = document.querySelector('.pokemon-list');
      const listItems = Array.from(listContainer.querySelectorAll('li'));
      const text = event.target.value.toLowerCase();

      document.querySelectorAll('.pokemon-list li button').forEach(function(pokemon){
        const pokemonName = pokemon.innerText.toLowerCase();

        const listItem = pokemon.parentElement;
        if(pokemonName.includes(text)){
          pokemon.style.display = 'block'
          listContainer.insertBefore(listItem, listContainer.firstChild);
        }else{
          pokemon.style.diplay = 'none'
        }
      })
    }
  
    //list of pokemon retrieval and interacticty onClick
    return {
      getAll: function () {
        return pokemonList;
      },
      add: function (pokemon) {
        return pokemonList.push(pokemon);
      },
      addListItem: function (pokemon) {
        let uListItem = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        uListItem.appendChild(listItem);
        listItem.appendChild(button);
  
        button.addEventListener("click", function () {
          pokemonRepository.showDetails(pokemon);
        });
      },
  
      loadList: function (pokemon) {
        return fetch(apiUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            json.results.forEach(function (item) {
              let pokemon = {
                name: item.name,
                height: item.height,
                detailsUrl: item.url,
              };
              pokemonRepository.add(pokemon);
            });
          })
          .catch(function (e) {
            console.error(e);
          });
      },
  
      loadDetails: function (pokemon) {
        url = pokemon.detailsUrl;
        return fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (details) {
            pokemon.imageURL = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      showDetails: function (pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          console.log(pokemon);
          showModal(
            pokemon,
            pokemon.name,
            "Height:" + pokemon.height,
            pokemon.imageURL,
          );
        });
      },
      togglePokemonContainer: togglePokemonContainer
    };
  })();
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
