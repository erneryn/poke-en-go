const initialState = {
    pokemons : []
}

const pokemonsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'POKEMONDATA':
            return {...state, pokemons : state.pokemons.concat(action.payload)}
        default:
            return state
    }
}

export default pokemonsReducer;