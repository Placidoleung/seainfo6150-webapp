import React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
import styles from "./ArticleList.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  
  return (
    <div>
      <ul className={styles.list}>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;