import React from 'react';
import styles from '../css/header.module.css'
import iconpokemon from '../images/iconpokemon.png'
import { Link } from 'react-router-dom'
const Header = ()=>{
    return(
        <div className={styles.header}>
            <img src={iconpokemon}/>
            <div className={styles.menu}>
            <Link className={styles.link} to="/">
            <p>Home</p>
            </Link>
            <div className={styles.separator}>|</div>
            <Link className={styles.link} to="/mypokemonlist">
            <p>My Favorites</p>
            </Link>
            </div>
        </div>
    )
}

export default Header;