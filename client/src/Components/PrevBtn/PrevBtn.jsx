import React from "react";
import styles from "./prevBtn.module.css";

export const PrevBtn = ({onClick}) => {
  return (
    <>
      <button className={styles.prevBtn} onClick={onClick}>
        <i className={`fa-solid fa-chevron-left ${styles.prevIcon}`}></i>
        PREV
      </button>
    </>
  );
};
