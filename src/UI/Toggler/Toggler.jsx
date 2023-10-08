import React from "react";
import classes from "./Toggler.module.css";
const Toggler = ({ checked, onYearlyHandler, onMonthlyHandler }) => {
  return (
    <>
      <input
        onChange={() => {}}
        checked={checked}
        type="checkbox"
        className={classes.checkbox}
      />
      <label className={classes[`switch`]}>
        <p onClick={onMonthlyHandler} className={classes[`monthly`]}>
          Monthly
        </p>
        <p onClick={onYearlyHandler} className={classes[`yearly`]}>
          Yearly
        </p>
        <span className={`${classes[`slider`]} ${classes[`round`]}`}></span>
      </label>
    </>
  );
};

export default Toggler;
