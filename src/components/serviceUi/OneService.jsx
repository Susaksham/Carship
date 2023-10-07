import React from "react";
import Button from "../../UI/Button/Button";

const OneService = ({ title, description, image }) => {
  console.log(title);
  return (
    <div className="bg-slate-50 flex  w-full h-fit items-center gap-8 px-16 py-8 rounded-3xl">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl text-primaryColor font-bold">{title}</h1>
        <p className="text-2xl text-primaryColor text-left">{description}</p>
        {/* <button className="px-8 py-4 w-fit rounded-lg bg-primaryColor text-slate-50 text-3xl">
          MORE
        </button> */}
      </div>
      <img className="w-[10rem]" src={image}></img>
    </div>
  );
};

export default OneService;
