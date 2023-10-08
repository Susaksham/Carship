import React from "react";
import Button from "../../UI/Button/Button";

const OneService = ({ title, description, image }) => {
  console.log(title);
  return (
    <div className="bg-slate-50 flex xmd:flex-row  mb:flex-col-reverse mb:items-center mb:justify-center  w-full h-fit items-center  gap-8 px-16 py-8 mb:py-24 xsm:py-24 xmd:py-8 rounded-3xl">
      <div className="flex flex-col items-start mb:justify-center mb:items-center xmd:items-start gap-4">
        <h1 className=" text-primaryColor font-bold mb:text-[5rem] md:text-4xl mb:text-center xmd:text-left xmd:text-4xl xsm:text-[3.5rem] ">
          {title}
        </h1>
        <p className="md:text-2xl  text-primaryColor text-left mb:text-[3rem] mb:text-center xmd:text-left xsm:text-4xl xmd:text-2xl">
          {description}
        </p>
        {/* <button className="px-8 py-4 w-fit rounded-lg bg-primaryColor text-slate-50 text-3xl">
          MORE
        </button> */}
      </div>
      <img className="w-[10rem] mb:w-[30rem] xmd:w-[10rem]" src={image}></img>
    </div>
  );
};

export default OneService;
