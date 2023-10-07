import React from "react";
import contactImage from "../../assets/5569546_2889130.svg";
const Contact = () => {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col items-center">
      <h1 className="text-7xl font-bold text-primaryColor ">Contact Us</h1>
      <div>
        <div></div>
        <div className="">
          <img src={contactImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
