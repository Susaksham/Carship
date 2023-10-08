import React, { useState } from "react";
import classes from "./QuestionPanel.module.css";
import { useSearchParams } from "react-router-dom";
import dropImage from "../../assets/icons8-drop-down-64 (1).png";
const QuestionPanel = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const answerShowHandler = () => {
    setShowAnswer((state) => {
      return !state;
    });
  };
  return (
    <div className={classes.questionWrapper}>
      <div
        className="flex items-center justify-between"
        onClick={answerShowHandler}
      >
        <h1 className="text-4xl py-4 cursor-pointer">{question}</h1>
        <img
          className={`${
            showAnswer
              ? "rotate-180 w-16 h-16 transition-all duration-500"
              : "w-16 h-16 transition-all duration-500"
          }`}
          src={dropImage}
        ></img>
      </div>
      {showAnswer && <p className="text-3xl cursor-pointer ">{answer}</p>}
    </div>
  );
};

export default QuestionPanel;
