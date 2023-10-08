import React from "react";
import Button from "../../UI/Button/Button";
import { Link, NavLink } from "react-router-dom";
import carShipLogo from "../../assets/carship-white-removebg-preview.png";
import classes from "./Navigation.module.css";
export const NavLinks = [
  {
    text: "Home",
    link: "/home",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
  {
    text: "Subscribe",
    link: "/subscribe",
  },
];
const Navigation = () => {
  return (
    <nav className="flex w-full  px-16 relative z-50 ">
      <div className="flex w-full items-center py-4 justify-between">
        {/* nav wrapper */}

        <NavLink to="/" className="text-4xl font-bold text-slate-50">
          <img className="w-40" src={carShipLogo}></img>
        </NavLink>
        <div className="text-5xl flex text-slate-50 font gap-8">
          {NavLinks.map((linkInfo, index) => {
            return (
              <Link key={index} to={linkInfo.link}>
                {linkInfo.text}
              </Link>
            );
          })}
        </div>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navigation;
