import React from "react";
import styles from "./components.module.css";


const BeerTitle = (props) => {
    return(
        <div className={`${styles.card} ${styles.cardContent} ${styles.cardTitle}`}>
            {props.Name}
        </div>
    );
}

export default BeerTitle;