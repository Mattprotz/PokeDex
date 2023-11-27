
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

let pokemonList = [ 
    Bulbasor, 
    Gastly,
    Butterfree, 
    Beedrill
];

let pokemonRepository = (function(){
    let pokemonList=[]

    return{
        add: function(pokemon){
            pokemonList.push(pokemon);
        },
        getAll:function(){
            return pokemonList;
        }
    }
})();

pokemonRepository.add({
    name: 'Pikachu',
    height: 0.7,
    type : ['electricity']
});


pokemonList.forEach(function(pokemon){
    document.querySelector('ul')
    console.log('hello')
});
