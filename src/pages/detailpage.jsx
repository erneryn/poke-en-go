import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { api_pokemon, api_server } from '../config/config'
import styles from '../css/detail.module.css'
import Layout from '../layout/mainlayout'
import Swal from 'sweetalert2'

const DetailPage = ()=>{
    const { pokemon } = useParams()
    const [pokemonData,SetPokemonData]= useState(null)

    useEffect(()=>{
        Axios.get(api_pokemon+'/'+pokemon)
        .then(res=>{
            SetPokemonData(res.data)
        })
    },[])

    const handleCatch = ()=>{
        let chance = Math.random() < 0.5
        if(!chance){
            return Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'TRY AGAIN !',
                text: "Failed To Catch Pokemon",
                showConfirmButton: false,
                timer: 1500
            })
        }

        let moves = pokemonData.moves.map(e=> e.move.name)
        let types = pokemonData.types.map(e=> e.type.name)
        let images = pokemonData.sprites.front_default

         return Swal.fire({
            position: 'center',
            title: `${pokemon} Catched`,
            text: "Insert Your Pokemon Nickname",
            input:'text',
            inputAttributes:{
                autocapitalize: 'on'
            },
            confirmButtonText: 'Add To Your Favorites',
            showLoaderOnConfirm: true,
            preConfirm: (nickname)=>{
                return Axios.post(api_server+'/mypokemon',{
                    name:pokemon,
                    nickname,
                    moves,
                    types,
                    images
                }).then(res=>{
                    Swal.fire({
                        position:'center',
                        title:"Succes Add To Favorites",
                        icon:'success'
                    })
                }).catch(err=>{
                    Swal.fire({
                        position:'center',
                        title:"Server Error",
                        icon:'error'
                    })         
                })
            }
        })
    }

    return(
        <Layout>
        <div className={styles.container} data-test="detail-page">
            <div className={styles.col1}>
                <img src={pokemonData && pokemonData.sprites.front_default}/>
                <img src={pokemonData && pokemonData.sprites.back_default}/>
                <img src={pokemonData && pokemonData.sprites.front_shiny}/>
                <img src={pokemonData && pokemonData.sprites.back_shiny}/>
            </div>
            <div className={styles.col2}>
                <div className={styles.row1}>
                    <span className={styles.name}>
                    {pokemonData && pokemonData.name}
                    </span>
                    <button className={styles.catch} onClick={handleCatch}>Catch This Pokemon</button>
                </div>
                <div className={styles.row2}>
                    <span className={styles.sub}>Types :</span>
                    {
                        pokemonData && pokemonData.types.map((e,idx) => <div key={idx} className={styles.pill}>{e.type.name}</div>)
                    }
                </div>
                <div className={styles.row3}>
                <span className={styles.sub}>Moves :</span>
                <div className={styles.moves}>
                    {
                    pokemonData && pokemonData.moves.map((e,idx) => <div key={idx} className={styles.pillmoves}>{e.move.name}</div>)
                    }
                </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default DetailPage