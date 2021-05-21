import Axios from 'axios'
import Swal from 'sweetalert2'
import { api_server } from '../config/config'
import styles from '../css/mypokemoncard.module.css'

const CardMyPokemon = ({data, reload})=>{

    const handleRemove = () =>{
        Axios.delete(api_server+'/mypokemons/delete/'+data._id)
        .then(resp=>{
            Swal.fire({
                timer:2000,
                title:'Success Delete Pokemon',
                icon:'success'
            })
            reload()
        })
        .catch(err=>{
            Swal.fire({
                title:"Fail Remove Pokemon",
                timer:2000,
                icon:'error'
            })
        })
    }

    return(
        <div className={styles.item} data-test="component-cardmypokemon">
            <div className={styles.card}>
                <div className={styles.head}>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.nickname}>{data.nickname}</div>
                </div>
                <div>
                    <img src={data.images} alt="" />
                </div>
                <div className={styles.footer}>
                    <button onClick={handleRemove} className={styles.button}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CardMyPokemon