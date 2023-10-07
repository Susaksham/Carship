import React from "react";

const BookNowButton = ({ children }) => {
  return (
    <button className="border-2 text-3xl py-2 px-8 w-fit bg-secondaryColor text-primaryColor">
      {children}
    </button>
  );
};

export default BookNowButton;
