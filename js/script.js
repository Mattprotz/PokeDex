let pokemonList = [];



let pokemonRepository = (function(){
    let addListItem;
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

    let modalContainer = document.querySelector('#modal-container');
    let closeButtonElement = document.createElement('button');
  
    function showModal(title, text, imageURL){

        modalContainer.innerHTML = ''; 

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let imageElement = document.createElement('img');
        imageElement.classList.add('img');
        imageElement.src = imageURL;
        imageElement.alt = 'Pokemon Image';

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imageElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
      
        modalContainer.classList.add('is-visible');

        closeButtonElement.addEventListener('click', hideModal);

        window.addEventListener('click', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'click' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        document.querySelector('#show-modal').addEventListener('click', () => {
            hideModal();
        });

        return showModal;
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

//list of pokemon and interacticty onClick
    return{
        add: function(pokemon){
            pokemonList.push(pokemon);
        },

        getAll:function(){
            return pokemonList;
        },

        addListItem:function(pokemon){
            let element = document.querySelector('.pokemon-list')
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            uListItem.appendChild(listItem);
            listItem.appendChild(button);

            button.addEventListener('click' , function(){
                pokemonRepository.showDetails(pokemon)
            });
        },

        loadList:function(pokemon){
            return fetch(apiUrl).then(function(response){
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                    };
                pokemonRepository.add(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            }) 
        },

        loadDetails:function(pokemon){
            url = pokemon.detailsUrl;
                return fetch(url).then(function(response){
                    return response.json();
            }).then(function (details){
                pokemon.imageURL = details.sprites.front_default;
                pokemon.height = details.height;
                pokemon.types = details.types;
            }).catch(function (e){
                console.error(e);
            });
        },

        showDetails:function(pokemon){
            pokemonRepository.loadDetails(pokemon).then(function(){
                console.log(pokemon);
                showModal(pokemon.name, 'Height:' + (pokemon.height) + 'm', 'Type:' + (pokemon.types), pokemon.imageURL);
               
            })
        }
    }
    return pokemonRepository;
})();

let uListItem = document.querySelector('ul');

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
});
});
