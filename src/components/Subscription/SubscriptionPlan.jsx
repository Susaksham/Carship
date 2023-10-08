import React from "react";

import classes from "./SubscriptionPlan.module.css";
const SubscriptionPlan = ({ price, features, name }) => {
  return (
    <div className={classes.plan}>
      <h1 className="text-5xl">{name}</h1>

      <h3 className={classes.price}>{`${price}`}</h3>
      <ol type="1" className="flex flex-col gap-2 list-decimal">
        {features.map((feature) => {
          return <li className="text-2xl">{feature}</li>;
        })}
      </ol>
      <div className="w-full flex items-center justify-center">
        <button className={classes.bookNowButton}>Book Now</button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
