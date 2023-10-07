import React from "react";
import OneService from "./OneService";
import noTimeDelivery from "../../assets/In no time-amico.svg";
import storageImage from "../../assets/Checking boxes-cuate.svg";
const services = [
  {
    title: "DELIVERING PACKAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: noTimeDelivery,
    count: 1,
  },
  {
    title: "FLEXIBLE STORAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: storageImage,
    count: 2,
  },
  {
    title: "FLEXIBLE STORAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: storageImage,
    count: 2,
  },
  {
    title: "FLEXIBLE STORAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: storageImage,
    count: 3,
  },
  {
    title: "FLEXIBLE STORAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: storageImage,
    count: 4,
  },
  {
    title: "FLEXIBLE STORAGE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    image: storageImage,
    count: 5,
  },
];
const AllServices = () => {
  return (
    <section className="w-full h-screen py-24 bg-primaryColor px-20 flex flex-col items-center gap-24">
      <h1 className="text-7xl font-bold  text-slate-50 text-center">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-2 gap-8 px-64">
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
