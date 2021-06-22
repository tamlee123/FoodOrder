import { Fragment } from "react";
import CartButtonHeader from "./CartButtonHeader";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>YummyMeals</h1>
        <CartButtonHeader onClickShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Full of delicous food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
