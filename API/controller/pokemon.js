const Pokemon = require('../model/pokemon')

class pokemonController {
    static async insertPokemon(req,res,next){
        try {
            const { name, nickname, types, moves, images } = req.body
            const newPokemon = new Pokemon({
                name,
                nickname,
                types,
                moves,
                images
            })
            const insert = await Pokemon.create(newPokemon)
            res.status(200).json(insert)
        } catch (error) {
            res.send(error)
        }
    }

    static async getMyPokemons(req,res,nex){
        try {
            const myPokemons = await Pokemon.find()
            res.status(200).json(myPokemons)
        } catch (error) {
            res.send(error)
        }
    }

    static async removeMyPokemon(req,res,nex){
        try {
            const id = req.params.id
            const remove = await Pokemon.deleteOne({_id : id})
            res.status(200).json(remove)
        } catch (error) {
            res.send(error)
        }
    }

  
}

module.exports= pokemonController