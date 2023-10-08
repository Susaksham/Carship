import React from "react";
import contactImage from "../../assets/5569546_2889130.svg";
import emailPersonImage from "../../assets/Email campaign-rafiki.svg";
const Contact = () => {
  return (
    <section className="w-full  mb:h-fit md:h-screen bg-slate-50 flex flex-col py-24 gap-24 px-48 items-center">
      <h1 className="text-7xl font-bold text-primaryColor ">CONTACT US</h1>
      <div className="flex justify-center mb:justify-center w-full lg:gap-32">
        <form
          className="flex flex-col gap-4 xmd:items-start mb:items-center justify-center  w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/*name */}
          <div className="relative w-full">
            <input
              className="w-full px-8 py-8 text-4xl text-primaryColor rounded-full placeholder:text-primaryColor border-2 border-primaryColor outline-none mb:text-6xl sm:text-4xl"
              placeholder="Name"
              type="text"
            ></input>
          </div>
          {/* email */}
          <input
            type="text"
            className="w-full px-8 py-8 text-4xl text-primaryColor rounded-full placeholder:text-primaryColor border-2 border-primaryColor outline-none mb:text-6xl sm:text-4xl"
            placeholder="Email"
          ></input>
          {/* message */}
          <textarea
            className="w-full resize-none outline-none h-[25rem] text-primaryColor px-4 py-8 text-4xl placeholder:text-primaryColor border-2 border-primaryColor rounded-3xl mb:text-6xl sm:text-4xl"
            placeholder="Message"
          ></textarea>

          <button className="w-full text-slate-50 text-center rounded-full text-4xl py-4  border-2 border-primaryColor bg-primaryColor outline-none mb:text-6xl mb:py-8 sm:text-4xl sm:py-6">
            Send Message
          </button>
        </form>

        <div className="flex items-center justify-center">
          <img
            className="w-[100rem] mb:hidden xmd:inline "
            src={emailPersonImage}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Contact;
