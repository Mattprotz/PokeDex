// let Bulbasor = {
//     name: 'Bulbasor',
//     height: 7,
//     type : ['grass' , 'poison']
// }
// let Gastly = {
//     name: 'Gastly',
//     height: 1.3,
//     type : ['ghost' , 'poison']
// }
// let Butterfree = {
//     name: 'Butterfree',
//     height: 1.1,
//     type: ['bug' , 'flying']
// }
// let Beedrill = {
//     name: 'Beedrill',
//     height: 1,
//     type: ['bug' , 'poison']
// }
// let Jigglypuff = {
//     name : 'Jigglypuff',
//     height : 1.5,
//     type : ['normal', 'fairy']
// }
// let Meowth = {
//     name : 'Meowth',
//     height : 1.4,
//     type : ['normal']
// }
// let Diglett = {
//     name : 'Diglett',
//     height : 1.8,
//     type : ['ground']
// }
// let Croagunk = {
//     name : 'Croagunk',
//     height : 2.4,
//     type : ['poison', 'fighting']
// }
let pokemonList = [];

let pokemonRepository = (function(){
    let addListItem;
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  
//list of pokemon and interacticty onClick
    return{
        add: function(pokemon){
            pokemonList.push(pokemon);
        },
        
        getAll:function(){
            return pokemonList;
        },

        addListItem:function(pokemon){
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
            })
        }
    };
    return pokemonRepository;
})();

let uListItem = document.querySelector('ul');

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
});
});




//fetch and load pokemon list from API
// function loadList(){
//     return fetch(apiUrl).then(function(response)
//     {
//         return response.json();
//         }).then(function (json) {
//             json.results.forEach(function (item) {
//                 let pokemon = {
//                     name: item.name,
//                     detailsUrl: item.url
//         };
//         add(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     }) 
// }
