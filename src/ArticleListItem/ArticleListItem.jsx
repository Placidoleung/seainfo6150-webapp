import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ArticleListItem.module.css"
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import { Link } from "react-router-dom";

const ArticleListItem = (props) => {
  const [hidden, setHidden] = useState(true);

  const onClick = () => {
    setHidden(!hidden);
  };

  return (
    <li className={styles.list}>
      <article>
      <Link to={'/articlelist/'+ props.article.slug}>
        <h2 className = {styles.title}>{props.article.title}</h2>
      </Link>
        <time className={styles.time} style={{display: hidden?"none":"block"}}  dateTime={props.article.timeStamp}>
          {props.article.displayDate}
        </time>
        <p className={styles.short} style={{display: hidden?"none":"block"}} >{props.article.shortText}</p>
        <ArticleTextToggleButton buttonText={hidden? "Show more" : "Show less"} onClick={onClick}/>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
