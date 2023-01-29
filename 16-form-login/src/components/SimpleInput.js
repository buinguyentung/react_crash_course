import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  // method 1: useState - update every keystroke
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  // method 2: useRef
  const nameInputRef = useRef();
  // providing validation feedback
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // manage overall form
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    // setEnteredNameIsValid(true);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    // setEnteredNameIsValid(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    // console.log(nameInputRef.current.value);
    // nameInputRef.current.value = ''; // => NOT IDEAL
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
