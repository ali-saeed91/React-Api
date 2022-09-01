import React, { useEffect, useState } from "react";
import axios from 'axios'
import QuotesItem from "./QuotesItem";
import classes from "./QuotesContainer.module.css";

const QuotesContianer = () => {
  const [quote, setQuote] = useState();
  const [fetchNew, setFetchNew] = useState(false);
  useEffect(() => {
    const fetchDataHandler = async () => {
      const response = await axios(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      );
      setQuote(response.data);
    };
    fetchDataHandler();
  }, [fetchNew]);
  return (
    <div className={classes.container}>
      {quote && <QuotesItem quoteText={quote.en} author={quote.author} />}
      {!quote && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      )}
      <button
        className={classes.btn}
        onClick={() => {
          setFetchNew((prevValue) => !prevValue);
        }}
      >
        Fetch New Quotes
      </button>
    </div>
  );
};

export default QuotesContianer;
