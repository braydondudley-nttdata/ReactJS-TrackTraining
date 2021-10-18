import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = event => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishFocusHandler = () => {
    setIsEntering(false)
  }

  const onFocusHandler = () => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={loc => "Are you sure you want to leave? \n(currently filled-in data on-screen will be lost)"}></Prompt>
      <Card>
        <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishFocusHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
