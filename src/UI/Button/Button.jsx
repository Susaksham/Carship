import React from "react";
import { Link } from "react-router-dom";
const Button = ({ children }) => {
  return (
    <Link
      className="border-2 text-3xl py-3 px-6 w-fit text-slate-50 rounded-xl"
      to="/login"
    >
      {children}
    </Link>
  );
};

export default Button;
