const Router = require('express').Router()
const pokemonController = require('../controller/pokemon')


Router.post('/mypokemon', pokemonController.insertPokemon)
Router.get('/mypokemons', pokemonController.getMyPokemons)
Router.delete('/mypokemons/delete/:id',pokemonController.removeMyPokemon)

module.exports = Router