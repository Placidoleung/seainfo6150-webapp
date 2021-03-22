import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = ({buttonText, onClick}) => {
    return (
        <button className = {styles.button} onClick = {onClick}>
            {buttonText}
        </button>
    );
};

export default ArticleTextToggleButton;