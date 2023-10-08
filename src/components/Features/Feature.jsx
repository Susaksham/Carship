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
        flip ? "xmd:flex-row-reverse" : ""
      } flex items-center mb:flex-col xmd:flex-row mb:gap-8 md:gap-32 xmd:gap-28  rounded-xl px-4 relative`}
    >
      <img className={classes.imageStyle} src={icon}></img>
      <div className="flex flex-col gap-4 mb:gap-16 relative ">
        <h1 className="text-6xl font-bold mb:text-[5rem] mb:text-center xmd:text-left xsm:text-[4rem] xmd:text-5xl text-black">
          {title}
        </h1>
        <p className="text-3xl mb:text-[3rem]  mb:text-center xsm:text-4xl  sm:leading-normal mb:leading-normal xmd:text-left xmd:text-2xl text-left text-black selection:text-secondaryColor">
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
