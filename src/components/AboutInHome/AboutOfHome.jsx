import React from "react";
import aboutImage from "../../assets/Take Away-pana.svg";
const AboutOfHome = () => {
  return (
    <section className="w-full mb:h-fit  md:h-screen md:px-48 bg-slate-50 py-36 flex flex-col  items-center px-36 gap-16">
      <h1 className=" mb:text-[7rem] xsm:text-[6rem] font-bold text-primaryColor xmd:text-7xl">
        ABOUT US
      </h1>
      <div className="flex items-center   mb:flex-col-reverse mb:items-center mb:justify-center xmd:flex-row">
        <div className="flex w-full flex-col gap-8">
          {/** left section */}
          <h1 className="xmd:text-5xl font-bold mb:text-[6rem] xsm:text-[5rem] text-primaryColor  mb:text-center xmd:text-left ">
            {" "}
            Who we are?
          </h1>
          <p className=" font-arial mb:leading-normal mb: xmd:text-3xl mb:text-5xl mb:text-center xsm:text-4xl xmd:text-left sm:leading-normal md:text-[2rem] md:leading-tight">
            We are pioneers in redefining convenience for urban living. We have
            a deep understanding of the challenges faced by city residents,
            we've curated a range of services designed to simplify your daily
            life. Whether you need a quick, reliable delivery, a secure storage
            space for your belongings, or assistance with shifting your luggage
            within the city, we’ve got you covered.
          </p>
        </div>
        <div className="flex w-full mb:items-center mb:justify-center">
          {/** right section */}
          <img
            className="md:w-full mb:w-[60rem] xsm:w-[40rem]"
            src={aboutImage}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default AboutOfHome;
