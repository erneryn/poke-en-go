import React from 'react'
import CardPokemon from './cardpokemon'
import styles from '../css/cardcontainer.module.css'

const CardsPokemon = ({pokemonData})=>{
    return(
        <div className={styles.row}>
            {   
                pokemonData.map(e=> <CardPokemon pokemon={e}/>)
            }
            
        </div>
    )
}

export default CardsPokemon