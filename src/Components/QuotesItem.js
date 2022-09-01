import React from "react";
import classes from "./Quotesitem.module.css";

const QuotesItem = (props) => {
  return (
    <div className={classes.item}>
      <h1>{props.quoteText}</h1>
      <p>{props.author}</p>
    </div>
  );
};

export default QuotesItem;
