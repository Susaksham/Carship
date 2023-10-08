import React from "react";

const BookNowButton = ({ children }) => {
  return (
    <button className="border-2 sm:text-3xl py-8 px-12 mb:rounded-xl w-fit text-slate-50   mb:text-6xl">
      {children}
    </button>
  );
};

export default BookNowButton;
