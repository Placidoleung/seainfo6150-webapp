import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = ({props}) => {
    if(props.length == 0) return 'You have no data!';
    else{
        return (
            <ul>
                {props.map(prop => <li key={prop.slug}>
                    <ArticleListItem props={prop} />
                </li>)}
            </ul>
        );
    }
}
export default ArticleList;