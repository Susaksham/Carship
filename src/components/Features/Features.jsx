import React from "react";
import Feature from "./Feature";
// import shipIcon from "../../assets/icons8-delivery-64 (2).png";
import shipIcon from "../../assets/Messenger-rafiki.svg";
import heavyBox from "../../assets/Heavy box-rafiki.svg";
import documentImage from "../../assets/Filing system-amico.svg";
import classes from "./Features.module.css";
const features = [
  {
    title: "EASY TO DELIVER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: shipIcon,
    count: 1,
  },
  {
    title: "FASTEST DELIVERY",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: heavyBox,
    count: 2,
  },
  {
    title: "BEST QUALITY",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: documentImage,
    count: 3,
  },
];
const Features = () => {
  return (
    <section className="w-full min-h-screen relative bg-slate-50   ">
      <div className="w-full h-full py-36 flex flex-col items-center gap-36">
        <h1 className="h-[4.4rem] text-7xl w-[65.7rem] text-center font-bold text-primaryColor">
          OUR PROMISES TO YOU
        </h1>
        <div className="flex flex-col px-56 gap-8 ">
          {features.map((feature, idx) => {
            return (
              <Feature
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                count={feature.count}
              ></Feature>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
