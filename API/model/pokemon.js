const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = Schema({
    name:{
        type: String,
        require:[true,"Pokemon must have name"]
    },
    nickname: {
        type: String,
        require:[true, "Pokemon must have nickname"]
    },
    moves:{
        type:[String],
        require:[true,"Pokemon must have moves"]
    },
    types:{
        type:[String],
        require:[true,'Pokemon must have types']
    },
    images:{
        type:String,
        require:[true,"Pokemon must Have images"]
    }
})

module.exports = mongoose.model('Pokemons', pokemonSchema)