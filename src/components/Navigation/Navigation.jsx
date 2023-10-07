import React from "react";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
const NavLinks = [
  {
    text: "Home",
    link: "/home",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Blogs",
    link: "/blogs",
  },
  {
    text: "Abous Us",
    link: "/about",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
];
const Navigation = () => {
  return (
    <nav className="flex w-full  px-16 relative z-50 ">
      <div className="flex w-full items-center py-4 justify-between">
        {/* nav wrapper */}

        <h1 className="text-4xl font-bold text-slate-50">CARSHIP</h1>
        <div className="text-5xl flex text-slate-50 font-bold gap-8">
          {NavLinks.map((linkInfo, index) => {
            return (
              <Link key={index} to={linkInfo.link}>
                {linkInfo.text}
              </Link>
            );
          })}
        </div>
        <Button>login</Button>
      </div>
    </nav>
  );
};

export default Navigation;
