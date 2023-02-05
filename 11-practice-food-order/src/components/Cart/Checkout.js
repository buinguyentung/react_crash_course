import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    street: true,
    city: true
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = value => value.trim() === '';
  const isNotNineChars = value => value.trim().length < 9;

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // console.log(enteredName, enteredPhone, enteredStreet, enteredCity);
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = !isNotNineChars(enteredPhone);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid
    })
    const formIsValid = enteredNameIsValid && enteredPhoneIsValid && enteredStreetIsValid && enteredCityIsValid;
    if (!formIsValid) {
      return;
    }
    // Submit data
    props.onSubmit({
      name: enteredName,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" ref={phoneInputRef}></input>
        {!formInputsValidity.phone && <p>Please enter a valid phone (at least 9 characters long)</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes['button--alt']}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.button}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
