import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from "../css/card.module.css";
import { Link } from 'react-router-dom'

const CardPokemon = ({ pokemon }) => {
  const [pokeDetail, SetPokeDetail] = useState(null );

  useEffect(() => {
    Axios.get(pokemon.url)
      .then((res) => {
        SetPokeDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div data-test="component-cardpokemon">
          {
      pokeDetail && 
      <Link to={`/detail/${pokeDetail.name}`}>
          <div className={styles.column}>
          <div className={styles.card}>
          <div className={styles.detailcontainer}>
          <p>{pokeDetail.name}</p>  
          <img src={pokeDetail.sprites.front_default} alt="" className={styles.avatar} />
          </div>
          </div>
          </div>
      </Link>
        }
        </div>
  );
};

export default CardPokemon;
