import React, { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food4foodies</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious foods" />
      </div>
    </Fragment>
  );
};

export default Header;