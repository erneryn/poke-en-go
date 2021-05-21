import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { getDataPokemon } from "../store/actions";
import CardPokemon from "../components/cardspokemon";
import styles from "../css/landing.module.css";
import Layout from "../layout/mainlayout";

const LandingPage = () => {
  const [limit, Setlimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getDataPokemon({ limit, offset }));
  }, []);

  const getMoreData = () => {
    let newOffset = offset + 20;
    dispatch(getDataPokemon({ limit, offset: newOffset }));
    setOffset(newOffset);
  };

  return (
    <Layout>
      <div className={styles.container} data-test="landing-page">
        <CardPokemon pokemonData={pokemonData} />
        <button
          onClick={() => getMoreData()}
          className={styles.buttonload}
          data-test="load-button"
        >
          Load More
        </button>
      </div>
    </Layout>
  );
};

export default LandingPage;
