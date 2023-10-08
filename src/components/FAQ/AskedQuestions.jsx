import React from "react";
import QuestionPanel from "./QuestionPanel";

const questionBank = [
  {
    question: "What services do you offer??",
    answer:
      "We offer a range of services including Express Document Delivery, Secure Item Storage, Luggage Shifting, Customized Delivery Solutions, Emergency Document Retrieval, and Eco-Friendly Deliveries. Explore our Services page for more details.",
  },
  {
    question: "How does the Secure Item Storage work?",
    answer:
      "Our Secure Item Storage service provides climate-controlled, organized storage for your belongings. Simply schedule a pickup through our app, and we'll securely store your items. When you need them back, request a delivery at your convenience.",
  },
  {
    question: "Is my sensitive information safe during document delivery?",
    answer:
      "Absolutely. We prioritize the security of your documents. Our Secure Document Delivery service ensures confidential files are handled with care, utilizing secure protocols and real-time tracking for added peace of mind.",
  },
  {
    question: "Can I adjust my storage duration??",
    answer:
      "Yes, our Flexible Storage System allows you to adjust your storage duration based on your needs. You can easily modify your storage plan through our user-friendly app, ensuring you only pay for the time you use.",
  },
  {
    question: "How can I track my deliveries and stored items?",
    answer:
      "Tracking your deliveries and stored items is simple with our real-time tracking feature. Access it through our app, providing you with updates on the status and location of your items at any time.",
  },
  {
    question:
      "What happens if my items are damaged during storage or delivery?",
    answer:
      "While we take every precaution to handle your items with care, accidents can happen. We offer optional item insurance to provide coverage for any damage that may occur during storage or delivery",
  },
];
const AskedQuestions = () => {
  return (
    <div className="flex flex-col w-full mb:h-fit md:min-h-screen  bg-slate-50 py-36 gap-16 items-center ">
      <h1 className="text-7xl font-bold text-primaryColor  xsm:text-6xl xmd:text-7xl xmd:text-center">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="grid grid-cols-1 px-48 mb:px-24 gap-8 items-center w-4/5">
        {questionBank.map((question, idx) => {
          return (
            <QuestionPanel
              key={idx}
              question={question.question}
              answer={question.answer}
            ></QuestionPanel>
          );
        })}
      </div>
    </div>
  );
};

export default AskedQuestions;
