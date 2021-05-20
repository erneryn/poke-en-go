import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import styles from '../css/card.module.css'

const CardPokemon = ({pokemon})=>{
    const [pokeDetail,SetPokeDetail] = useState([])
    useEffect(()=>{
        Axios.get(pokemon.url)
        .then(res=>{
            SetPokeDetail(res.data)
        })
    },[])

    return(
        <div className={styles.column}>
            <div className={styles.card}>
        <p>{pokeDetail.name}</p>
            </div>
                
        </div>
    )
}

export default CardPokemon