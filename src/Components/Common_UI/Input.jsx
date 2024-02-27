import { useState } from 'react';
import classes from './Input.module.css';
import icon from '../../images/icon-error.svg';

const Input = props => {
    const [error, setError] = useState('');

    const blurHandler = event => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const userInput = event.target.value;

        if (event.target.type === 'email' && !userInput.match(mailFormat)) {
            setError(props.errorMessage);
        }
        else if (userInput.trim().length === 0) {
            setError(props.errorMessage);
        }
    };


    const focusHandler = () => {
        setError('');
    };

    return (
        <div className={classes.wrapper}>
            {error && <img src={icon} />}
            <input
                {...props.inputProps}
                className={`${classes.input} ${error && classes.invalid}`}
                onBlur={blurHandler}
                onFocus={focusHandler}
            />
            <span className={classes.message}>{error}</span>
        </div>
    );
};

export default Input;