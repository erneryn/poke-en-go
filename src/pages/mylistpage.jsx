import { useState } from "react";
import { useEffect } from "react";
import { api_server } from "../config/config";
import Axios from "axios";
import Layout from "../layout/mainlayout";
import CardPokemon from "../components/cardMyPokemon";
import CardMyPokemon from "../components/cardMyPokemon";
import style from '../css/mylistpage.module.css';

const MyListPage = () => {
  const [myPokemons, setMyPokemons] = useState([]);
  const getMyPokemons = ()=>{
    Axios.get(api_server + "/mypokemons")
    .then((res) => {
      setMyPokemons(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    getMyPokemons()
  }, []);

  return (
    <div>
      <Layout>
          <div className={style.title}>
              <h1>My Pokemon List</h1>
          </div>
          <div className={style.container}>
              {
               myPokemons.length ? 
               <div>
                {
                    myPokemons.map((el,idx) => <CardMyPokemon key={idx} data={el} reload={getMyPokemons}/>)
                }
                </div>
               :
               'Your List Is Empty'
              }     
          </div>
      </Layout>
    </div>
  );
};

export default MyListPage;
