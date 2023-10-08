import React, { useState } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import Toggler from "../../UI/Toggler/Toggler";

const monthlyPlans = [
  {
    name: "Basic Plan",
    price: "₹1599/month",
    features: [
      "5 document deliveries",
      "10 items stored (up to 10 sq. ft. storage space)",
      "Standard delivery speed",
      "Access to community platform",
      "Basic customer support",
    ],
  },
  {
    name: "Standard Plan",
    price: "₹2999/month",
    features: [
      "15 document deliveries",
      "20 items stored (up to 20 sq. ft. storage space)",
      "Expedited delivery speed",

      "Real-time tracking for deliveries and stored items",
      "24/7 customer support",
      "Access to community platform",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹5999/month",
    features: [
      "Unlimited document deliveries",
      "30 items stored (up to 30 sq. ft. storage space)",
      "Priority delivery speed",
      "Climate-controlled storage option",
      "Emergency document retrieval service",
      "Dedicated account manager",
      "Access to community platform",
    ],
  },
  {
    name: "Business Plan",
    price: "₹11999/month",
    features: [
      "Unlimited document deliveries",
      "50 items stored (up to 50 sq. ft. storage space)",
      "Express delivery speed",
      "Dedicated climate-controlled storage",
      "Customized delivery solutions",
      "Bulk storage discounts",
      "Premium customer support",
      "Access to community platform",
    ],
  },
];
const yearlyPlans = [
  {
    name: "Basic  Plan",
    price: "₹15999/yearly",
    features: [
      "60 document deliveries annually",
      "50 items stored (up to 50 sq. ft. storage space)",
      "Standard delivery speed",
      "Access to community platform",
      "Basic customer support",
    ],
  },
  {
    name: "Standard Plan",
    price: "₹31999/yearly",
    features: [
      "180 document deliveries annually",
      "100 items stored (up to 100 sq. ft. storage space)",
      "Expedited delivery speed",

      "Real-time tracking for deliveries and stored items",
      "24/7 customer support",
      "Access to community platform",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹56000/yearly",
    features: [
      "Unlimited document deliveries",
      "150 items stored (up to 150 sq. ft. storage space)",
      "Priority delivery speed",
      "Climate-controlled storage option",
      "Emergency document retrieval service",
      "Dedicated account manager",
      "Access to community platform",
    ],
  },
  {
    name: "Business Plan",
    price: "₹99,999/yearly",
    features: [
      "Unlimited document deliveries",
      "250 items stored (up to 250 sq. ft. storage space)",
      "Express delivery speed",
      "Dedicated climate-controlled storage",
      "Customized delivery solutions",
      "Bulk storage discounts",
      "Premium customer support",
      "Access to community platform",
    ],
  },
];
const Subscription = () => {
  const [checked, setChecked] = useState(false);
  const onMonthlyHandler = () => {
    setChecked(false);
  };
  const onYearlyHandler = () => {
    setChecked(true);
  };
  return (
    <section className="w-full min-h-screen px-36 pb-24">
      <div className="flex justify-between items-center   py-16">
        <h1 className="text-6xl font-bold text-primaryColor">Subscription</h1>
        <Toggler
          checked={checked}
          onMonthlyHandler={onMonthlyHandler}
          onYearlyHandler={onYearlyHandler}
        ></Toggler>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-8 ">
        {!checked &&
          monthlyPlans.map((plan, idx) => {
            return (
              <SubscriptionPlan
                key={idx}
                name={plan?.name}
                price={plan?.price}
                features={plan.features}
              ></SubscriptionPlan>
            );
          })}
        {checked &&
          yearlyPlans.map((plan, idx) => {
            return (
              <SubscriptionPlan
                key={idx}
                name={plan?.name}
                price={plan?.price}
                features={plan.features}
              ></SubscriptionPlan>
            );
          })}
      </div>
    </section>
  );
};

export default Subscription;
