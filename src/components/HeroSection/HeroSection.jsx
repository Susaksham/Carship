import React from "react";
import BannerImage from "../../assets/Take Away-rafiki (2).svg";
import Button from "../../UI/Button/Button";
import BookNowButton from "../../UI/Button/BookNowButton";
import eclipse from "../../assets/Ellipse 1svg.svg";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="w-full relative text-3xl h-full flex-1 flex items-center overflow-hidden mb:justify-center sm:justify-between  text-slate-50  ">
      {/* left container */}
      <div className=" mb:w-full sm:w-1/2 mb:gap-28 sm:gap-12  h-full xl:px-36 lg:px-24  md:px-16 xmd:px-12 sm:pr-36  mb:px-16  relative bottom-20  flex flex-col gap-6 ">
        <h1 className=" font-poppins mb:text-[10rem]  xsm:text-[8rem] sm:text-8xl   leading-snug mb:text-center sm:text-left font-bold">
          Delivering
          <br></br>
          Satisfaction
          <br></br>
          Everyday
        </h1>
        <p className=" font-arial xmd:text-2xl mb:text-[3rem] sm:text-[2rem] sm:leading-normal mb:leading-normal mb:text-center sm:text-left">
          We make vehicle delivery and storage hassle-free. Whether you're
          moving, buying a new car, or need secure storage, we've got you
          covered. Join us for a smoother ride.
        </p>
        <div className="flex items-center xmd:justify-start mb:justify-center sm:justify-start ">
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>
      {/* right container */}
      <div className="absolute w-full h-screen  top-0 right-0 ">
        <div className="relative w-full h-full ">
          <img
            className="lg:h-[79rem] xl:h-[79.1rem] md:h-[74.1rem] xmd:h-[76rem] sm:h-[70rem] sm:inline mb:hidden  absolute  -top-44 z-40  xl:w-[82rem] lg:w-[82rem]  md:w-[65rem] xmd:w-[51rem] sm:w-[47rem] right-0 bottom-[28rem]"
            src={BannerImage}
          ></img>
          {/* <img className={classes.eclipse} src={eclipse}></img> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
