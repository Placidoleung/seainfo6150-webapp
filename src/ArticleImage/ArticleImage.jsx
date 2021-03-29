import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css"

const ArticleImage = ({url,title}) => {
    return(
        <img className = {styles.img} src={url} alt={title} />
    );
};

export default ArticleImage;