import React from "react";
import aboutImage from "../../assets/Take Away-pana.svg";
const AboutOfHome = () => {
  return (
    <section className="w-full h-screen bg-slate-50 py-36 flex flex-col items-center px-36 gap-16">
      <h1 className="text-7xl font-bold text-primaryColor">ABOUT US</h1>
      <div className="flex items-center">
        <div className="flex w-full flex-col gap-8">
          {/** left section */}
          <h1 className="text-5xl font-bold text-primaryColor  ">
            {" "}
            Who we are?
          </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            excepturi quae nesciunt blanditiis voluptas doloribus aperiam quod.
            Harum odit non ad quibusdam saepe. Est sed assumenda incidunt
            expedita magni laborum quasi corrupti, delectus inventore porro cum
            sit temporibus sequi tempora atque officiis laboriosam ullam in quam
            asperiores dolorem. Mollitia, molestias!
          </p>
        </div>
        <div className="flex w-full">
          {/** right section */}
          <img src={aboutImage}></img>
        </div>
      </div>
    </section>
  );
};

export default AboutOfHome;
