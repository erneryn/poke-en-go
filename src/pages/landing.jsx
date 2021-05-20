import React , { useEffect, useState }from 'react';
import Header from '../components/header'
import { useSelector, useDispatch } from "react-redux";
import { getDataPokemon } from '../store/actions'
import CardPokemon from '../components/cardspokemon';
import styles from '../css/landing.module.css'

const LandingPage = ()=>{
    const [limit,Setlimit] = useState(20);
    const [offset,setOffset] = useState(0)
    const dispatch = useDispatch()
    const pokemonData = useSelector(state=> state.pokemons)
    
    useEffect(() => {
        dispatch(getDataPokemon({limit,offset}))
    }, [])

    const getMoreData = () =>{
       let newLimit = limit+20
       let newOffset = limit
       Setlimit(newLimit)
       setOffset(newOffset)
       dispatch(getDataPokemon({limit,offset}))
    }

        return(
            <div className={styles.container}>
                <Header/>
                    <CardPokemon pokemonData={pokemonData}/>
                   <button onClick={getMoreData} className={styles.buttonload}>Load More</button>
            </div>
        )
}

export default LandingPage;