import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Subscription from "../components/Subscription/Subscription";
import SubNavBar from "../components/SubscriptionNavBar/SubNavBar";
const SubscriptionPage = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <SubNavBar></SubNavBar>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
};

export default SubscriptionPage;
