import React from "react";
import classes from "./Feature.module.css";
const Feature = ({ title, description, icon, count }) => {
  let flip = true;
  if (count % 2 == 1) {
    flip = false;
  }
  // let imageStyle = "";
  // switch (count) {
  //   case 1:
  //     imageStyle = "w-[50rem] ";
  //     break;
  //   case 2:
  //     imageStyle = "w-[50rem]";
  //     break;
  //   case 3:
  //     imageStyle = "w-[50rem]";
  // }
  return (
    <div
      className={`${
        flip ? "flex-row-reverse" : ""
      } flex items-center gap-48  rounded-xl px-4 relative`}
    >
      <img className={classes.imageStyle} src={icon}></img>
      <div className="flex flex-col gap-4 relative ">
        <h1 className="text-6xl font-bold text-black">{title}</h1>
        <p className="text-3xl text-left text-black selection:text-secondaryColor">
          {description}
        </p>

        <svg
          height="300%"
          stroke="#5928E5"
          strokeWidth="2"
          className={classes[`text-line`]}
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {count}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Feature;
