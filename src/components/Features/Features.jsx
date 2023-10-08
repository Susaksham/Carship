import React from "react";
import Feature from "./Feature";
// import shipIcon from "../../assets/icons8-delivery-64 (2).png";
import shipIcon from "../../assets/Messenger-rafiki.svg";
import heavyBox from "../../assets/Heavy box-rafiki.svg";
import documentImage from "../../assets/Filing system-amico.svg";
import classes from "./Features.module.css";
const features = [
  {
    title: "SWIFT DELIVERIES",
    description:
      "Experience lightning-fast deliveries within the city. Our prompt and efficient service ensures your items reach their destination in record time. Say goodbye to waiting and hello to instant deliveries.",
    icon: shipIcon,
    count: 1,
  },
  {
    title: "SECURE STORAGE SOLUTIONS",
    description:
      "Enjoy peace of mind with our state-of-the-art storage facilities. Your belongings are stored in secure, climate-controlled spaces, monitored 24/7. Access your items whenever you need, knowing they are safe and well-protected.",
    icon: heavyBox,
    count: 2,
  },
  {
    title: "SECURE DOCUMENT DELIVERY",
    description:
      "Your sensitive documents are safe with us. We offer specialized secure document delivery services, ensuring confidential files and important papers are handled with the utmost care and delivered securely to their intended recipients.",
    icon: documentImage,
    count: 3,
  },
];
const Features = () => {
  return (
    <section className="w-full min-h-screen relative bg-slate-50   ">
      <div className="w-full h-full py-36 flex flex-col items-center gap-36">
        <h1 className="h-[4.4rem] text-7xl w-[65.7rem] text-center font-bold text-primaryColor mb:text-[6rem] xsm:text-[4rem] sm:text-[5rem]">
          OUR PROMISES TO YOU
        </h1>
        <div className="flex flex-col px-56 xmd:px-28 md:px-48 gap-8 mb:gap-16">
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
