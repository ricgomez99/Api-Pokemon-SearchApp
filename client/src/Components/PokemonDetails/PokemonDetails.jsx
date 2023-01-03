import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails, cleanDetail } from "../../Redux/Actions/actions";
import styles from "./Pokemon.module.css";
import { PrevBtn } from "../PrevBtn/PrevBtn";
import { useHistory } from "react-router-dom";

export const PokemonDetails = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  // console.log(details);
  const { id } = props.match.params;

  const history = useHistory();

  const handleHistory = () => {
    history.push("/main");
  };

  useEffect(() => {
    dispatch(getPokemonDetails(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.returnSection}>
        <PrevBtn onClick={handleHistory} />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={details.img} alt={details.name} />
          <h2>{details.name}</h2>
          <h3 className={styles.id}>{details.id}</h3>
          <div className={styles.content}>
            <p>
              <span>Life:</span> {details.life}
            </p>
            <p>
              <span>Attack:</span> {details.attack}
            </p>
            <p>
              <span>Defense:</span> {details.defense}
            </p>
            <p>
              <span>Speed:</span> {details.speed}
            </p>
            <p>
              <span>Height:</span> {details.height}
            </p>
            <p>
              <span>Weight:</span> {details.weight}
            </p>
          </div>
          <h2 className={styles.typeTitle}>Types</h2>
          <ul className={styles.types}>
            {details.types && details.types.length ? (
              details.types.map((type, index) => (
                <li key={index}>{type.name}</li>
              ))
            ) : (
              <p>No types available</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
