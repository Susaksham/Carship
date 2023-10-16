import React from "react";
import { NavLinks } from "../Navigation/Navigation";
import carshipLogo from "../../assets/carship-white-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import facebookicon from "../../assets/icons8-facebook.svg";
import instagramIcon from "../../assets/icons8-instagram.svg";
import linkdinIcon from "../../assets/icons8-linkedin (2).svg";
import blogIcon from "../../assets/icons8-blogger.svg";
export const services = [
  {
    title: "Luggage Shifting",
  },
  {
    title: "Secure Item Storage",
  },
  {
    title: "Express Document Delivery",
  },
  {
    title: "Customized Delivery Solutions",
  },
  {
    title: "Emergency Document Retrieval",
  },
];

const Footer = () => {
  return (
    <footer className="h-[50vh] bg-primaryColor flex px-24 pt-24 pb-12">
      <div className="flex justify-between w-full">
        {/** logo */}
        <div className="text-slate-50 text-4xl px-8">
          <img className="w-40" src={carshipLogo}></img>
        </div>
        <div className="flex gap-48">
          {/* Navigation links */}
          <div className="flex flex-col gap-16">
            <h1 className="text-4xl text-slate-50">COMPANY</h1>
            <div className="flex flex-col gap-4">
              {NavLinks.map((link, idx) => {
                return (
                  <NavLink
                    key={idx}
                    className="text-3xl text-slate-300"
                    to={link.link}
                  >
                    {link.text}
                  </NavLink>
                );
              })}
            </div>
          </div>
          {/** services links */}
          <div className="flex flex-col gap-16">
            <h1 className="text-4xl text-slate-50">SERVICES</h1>

            <div className=" flex flex-col gap-8">
              {services.map((service, idx) => {
                return (
                  <p key={idx} className="text-3xl text-slate-300">
                    {service.title}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16">
              <h1 className="text-4xl text-slate-50">LEGAL</h1>
              <div className="flex flex-col gap-8">
                <p className="text-3xl text-slate-300">Terms & Condition</p>
                <p className="text-3xl text-slate-300">Privacy Policy</p>
                <p className="text-3xl text-slate-300">Terms of use</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61552481300359"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img className="w-[3rem]" src={facebookicon} alt="" />
            </a>
            <a
              href="https://www.instagram.com/carshipofficial/"
              className="flex items-center justify-center"
              target="_blank"
            >
              <img className="w-[3rem]" src={instagramIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/car-ship-1b91a7295/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img className="w-[4rem]" src={linkdinIcon} alt="" />
            </a>
            <a
              href="https://carship07.blogspot.com/2023/10/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img className="w-[3.8rem]" src={blogIcon} alt="" />
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-slate-50">SUBSCRIBE NOW</h1>
            <form className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="EMAIL"
                className="text-4xl px-8  py-4 placeholder:text-slate-600 outline-none rounded-xl"
              ></input>
              <button className=" text-center text-4xl text-primaryColor bg-slate-50 px-8 font-bold py-4 rounded-xl ">
                Send
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
