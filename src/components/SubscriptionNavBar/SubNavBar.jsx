import React from "react";
import Button from "../../UI/Button/Button";
import { Link, NavLink } from "react-router-dom";
import carShipLogo from "../../assets/carshiplogocropped.png";
import classes from "./SubNavBar.module.css";
export const NavLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "FAQ",
    link: "/askedQuestion",
  },
  {
    text: "Pricing",
  },
];
const SubNavBar = () => {
  return (
    <nav className="flex w-full  px-16 relative z-50 mt-2 ">
      <div className="flex w-full items-center py-4 justify-between">
        {/* nav wrapper */}

        <NavLink to="/" className="text-primaryColor text-4xl font-bold ">
          <img className="w-40" src={carShipLogo}></img>
        </NavLink>
        <div className="text-5xl flex text-primaryColor  gap-16 font-semibold">
          {NavLinks.map((linkInfo, index) => {
            return (
              <Link
                className="text-4xl flex items-center justify-center"
                key={index}
                to={linkInfo.link}
              >
                {linkInfo.text}
              </Link>
            );
          })}
          <button className="text-4xl px-16 py-2 flex items-center justify-center text-center rounded-2xl border-2 border-primaryColor">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SubNavBar;
