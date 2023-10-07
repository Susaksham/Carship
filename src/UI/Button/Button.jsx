import React from "react";

const Button = ({ children }) => {
  return (
    <button className="border-2 text-3xl py-2 px-8 w-fit text-slate-50">
      {children}
    </button>
  );
};

export default Button;
