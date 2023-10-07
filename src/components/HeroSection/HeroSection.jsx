import React from "react";
import BannerImage from "../../assets/Take Away-rafiki (2).svg";
import Button from "../../UI/Button/Button";
import BookNowButton from "../../UI/Button/BookNowButton";
import eclipse from "../../assets/Ellipse 1svg.svg";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="w-full relative text-3xl h-full flex-1 flex items-center overflow-hidden   text-slate-50  ">
      {/* left container */}
      <div className="w-1/2 h-full px-36 pr-36 relative bottom-20  flex flex-col gap-6 ">
        <h1 className="text-8xl leading-snug">
          Delivering
          <br></br>
          Satisfaction
          <br></br>
          Everyday
        </h1>
        <p className="text-3xl">
          We make vehicle delivery and storage hassle-free. Whether you're
          moving, buying a new car, or need secure storage, we've got you
          covered. Join us for a smoother ride.
        </p>
        <BookNowButton>Book Now</BookNowButton>
      </div>
      {/* right container */}
      <div className="absolute w-full h-screen  top-0 right-0 ">
        <div className="relative w-full h-full ">
          <img
            className="lg:h-[74.1rem] xl:h-[82.1rem] absolute  -top-44 z-40 xl:w-[86rem] lg:w-[80rem] right-0 bottom-[28rem]"
            src={BannerImage}
          ></img>
          {/* <img className={classes.eclipse} src={eclipse}></img> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
