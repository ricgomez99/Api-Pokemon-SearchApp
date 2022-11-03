import { React } from "react";
import { Link } from "react-router-dom";
import img from "./pokeball.png";
import styles from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_body}>
        <img
          src={props.image || img}
          alt={props.name}
          className={styles.card_image}
        />
        <h2 className={styles.card_title}>{props.name}</h2>
        <p className={styles.card_description}>
          <span>Attack:</span>
          {props.attack}
        </p>
        <ul className={styles.card_list}>
          {props.types &&
            props.types.map((i, index) => {
              if (typeof i === "string") {
                return <li key={index}>{i}</li>;
              } else {
                return <li key={i.id}>{i.name}</li>;
              }
            })}
        </ul>
      </div>
      <Link to={`/pokemons/${props.id}`}>
        <button className={styles.card_btn}>View More</button>
      </Link>
    </div>
  );
};
