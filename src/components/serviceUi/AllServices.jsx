import React from "react";
import OneService from "./OneService";
import noTimeDelivery from "../../assets/In no time-amico.svg";
import storageImage from "../../assets/Checking boxes-cuate.svg";
export const services = [
  {
    title: "LUGGAGE SHIFTING",
    description:
      "Moving to a new place or switching accommodations? Say goodbye to the stress of moving heavy luggage. Our Luggage Shifting Service ensures your bags and belongings are transported efficiently within the city. Focus on settling in while we handle the logistics.",
    image: noTimeDelivery,
    count: 1,
  },
  {
    title: "SECURE ITEM STORAGE",
    description:
      "Running out of space at home or the office? Our Secure Item Storage service provides a safe haven for your belongings. From valuable items to seasonal gear, our climate-controlled facilities offer secure, organized, and easily accessible storage solutions tailored to your needs.",
    image: storageImage,
    count: 2,
  },
  {
    title: "FLEXIBLE STORAGE SYSTEM",
    description:
      "Our Flexible Storage System is designed to cater to your unique needs. Whether you require short-term storage for a few days or long-term storage spanning several months, our service adapts to your schedule, offering the flexibility you need.",
    image: storageImage,
    count: 2,
  },
  {
    title: "EXPRESS DOCUMENT DELIVERY",
    description:
      " Need important documents delivered swiftly and securely? Our Express Document Delivery service ensures your confidential files reach their destination on time and in pristine condition. With real-time tracking and dedicated handling, trust us with your sensitive paperwork.",
    image: storageImage,
    count: 3,
  },
  {
    title: "CUSTOMIZED DELIVERY SOLUTIONS",
    description:
      "Have specific delivery requirements? Our Customized Delivery Solutions are designed just for you. Whether it's fragile items, specific delivery times, or unique handling instructions, we tailor our services to meet your precise needs, ensuring a personalized and hassle-free experience.",
    image: storageImage,
    count: 4,
  },
  {
    title: "EMERGENCY DOCUMENT RETRIEVAL",
    description:
      "Need urgent access to important documents? Our Emergency Document Retrieval service is here to help. Whether it's business contracts or personal paperwork, we understand the urgency. We retrieve your documents swiftly, ensuring you have what you need, precisely when you need it.",
    image: storageImage,
    count: 5,
  },
];
const AllServices = () => {
  return (
    <section className="w-full lg:min-h-screen md:h-fit mb:h-fit py-24 bg-primaryColor px-20 mb:px-8 flex flex-col items-center gap-24">
      <h1 className="text-7xl mb:text-[6rem] font-bold xsm:text-[6rem] xmd:text-7xl  text-slate-50 text-center">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-2 mb:grid-cols-1 xmd:grid-cols-2 md:gap-8 mb:gap-16 px-64 mb:px-24">
        {services.map((service, index) => {
          return (
            <OneService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            ></OneService>
          );
        })}
      </div>
    </section>
  );
};

export default AllServices;
