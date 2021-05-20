import React from 'react';
import styles from '../css/header.module.css'
import iconpokemon from '../images/iconpokemon.png'
const Header = ()=>{
    return(
        <div className={styles.header}>
            <img src={iconpokemon}/>
        </div>
    )
}

export default Header;