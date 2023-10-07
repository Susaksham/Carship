import React from "react";
import classes from "./Help.module.css";
import chatIcon from "../../assets/chat.svg";
const Help = () => {
  return (
    <div className="flex xl:fixed xl:bottom-8 right-8 lg:z-50">
      <div className={classes.helpContainer}>
        <span>
          <img className={classes.chatIcon} src={chatIcon}></img>
        </span>
        <span className="text-2xl font-bold text-slate-50">Help</span>
      </div>
    </div>
  );
};

export default Help;
