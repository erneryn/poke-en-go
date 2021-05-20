import Axios from 'axios'
import { api_pokemon } from '../../config/config.js'

export const SuccessGetPokemon = (pokemondata)=>{
    return(
        {
            type: 'POKEMONDATA',
            payload: pokemondata
            
        }
    )
}

export const getDataPokemon = (params)=>{
    // params = '?limit=20&offset=0
    let queryParams = `?limit=${params.limit}&offset=${params.offset}`
    return dispatch => {
        Axios.get(api_pokemon+queryParams)
        .then(async res=>{
            let pokeName = res.data.results
            let nextUrl = res.data.next
            dispatch(SuccessGetPokemon(pokeName))
        })
    }
}