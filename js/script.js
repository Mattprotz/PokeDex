
let Bulbasor = {
    name: 'Bulbasor',
    height: 7,
    type : ['grass' , 'poison']
}

let Gastly = {
    name: 'Gastly',
    height: 1.3,
    type : ['ghost' , 'poison']
}

let Butterfree = {
    name: 'Butterfree',
    height: 1.1,
    type: ['bug' , 'flying']
}

let Beedrill = {
    name: 'Beedrill',
    height: 1,
    type: ['bug' , 'poison']
}

let Jigglypuff = {
    name : 'Jigglypuff',
    height : 1.5,
    type : ['normal', 'fairy']
}

let Meowth = {
    name : 'Meowth',
    height : 1.4,
    type : ['normal']
}
let Diglett = {
    name : 'Diglett',
    height : 1.8,
    type : ['ground']
}
let Croagunk = {
    name : 'Croagunk',
    height : 2.4,
    type : ['poison', 'fighting']
}

let pokemonList = [ 
    Bulbasor, 
    Gastly,
    Butterfree, 
    Beedrill,
    Jigglypuff,
    Meowth,
    Diglett,
    Croagunk
];

let pokemonRepository = (function(){
    let pokemonList=[]
    let addListItem;
    
    return{
        add: function(pokemon){
            pokemonList.push(pokemon);
        },
        getAll:function(){
            return repository.pokemonList;
        },
        addListItem:function(pokemon){
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            uListItem.appendChild(listItem);
            listItem.appendChild(button);

            button.addEventListener('click' , function(showDetails){
                console.log(pokemon)
            });
        },
        showDetails:function(pokemon){
            
        }
    };

    return repository;

})();

pokemonRepository.add({
    name: 'Pikachu',
    height: 0.7,
    type : ['electricity' , 'swag']
});

let uListItem = document.querySelector('ul');

pokemonList.forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});

