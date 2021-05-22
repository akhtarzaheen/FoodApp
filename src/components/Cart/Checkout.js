import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const checkNameValid = (value) => {
  return value.trim().length !== 0;
};
const checkStreetValid = (value) => {
  return value.trim().length !== 0;
};
const checkPostalValid = (value) => {
  return value.trim().length > 5;
};
const checkCityValid = (value) => {
  return value.trim().length !== 0;
};

const Checkout = (props) => {
  const [formInputValidation, setFormInputValidation] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const isNameValid = checkNameValid(enteredName);
    const isStreetValid = checkStreetValid(enteredStreet);
    const isPostalValid = checkPostalValid(enteredPostal);
    const isCityValid = checkCityValid(enteredCity);

    setFormInputValidation({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });

    const isFormValid =
      isNameValid && isStreetValid && isPostalValid && isCityValid;
    if (isFormValid) {
      return;
    }
  };
  const nameFormVal = !formInputValidation.name && (
    <p className={classes["error-text"]}>Please enter valid name.</p>
  );
  const streetFormVal = !formInputValidation.street && (
    <p className={classes["error-text"]}>Please enter valid street.</p>
  );
  const postalFormVal = !formInputValidation.postal && (
    <p className={classes["error-text"]}>
      Please enter valid postal code (Char more than 5).
    </p>
  );
  const cityFormVal = !formInputValidation.city && (
    <p className={classes["error-text"]}>Please enter valid city.</p>
  );
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidation.name ? classes.invalid : ""
        }`}
      >
        <label for="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {nameFormVal}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidation.street ? classes.invalid : ""
        }`}
      >
        <label for="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {streetFormVal}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidation.postal ? classes.invalid : ""
        }`}
      >
        <label for="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {postalFormVal}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidation.city ? classes.invalid : ""
        }`}
      >
        <label for="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {cityFormVal}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
