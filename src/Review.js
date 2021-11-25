import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    return num < 0 ? people.length - 1 : num > people.length - 1 ? 0 : num;
  };

  const randomReview = () => {
    let num = Math.floor(Math.random() * people.length);
    return num === index ? setIndex(checkNumber(num + 1)) : setIndex(num);
  };

  return (
    <article className="container">
      <div className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
        </div>
        <p className="info">{text}</p>
        <div>
          <FaChevronLeft
            className="prev-btn"
            onClick={() => setIndex(checkNumber(index - 1))}
          />
          <FaChevronRight
            className="next-btn"
            onClick={() => setIndex(checkNumber(index + 1))}
          />
        </div>
        <button className="random-btn" onClick={() => randomReview()}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
