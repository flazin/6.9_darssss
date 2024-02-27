import classes from './Form.module.css';
import Input from '../Common_UI/Input';
import Button from '../Common_UI/Button';
import FormHeader from './FormHeader';

const Form = () => {

    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <div>
            <FormHeader />
            <form
                className={classes.form}
                onSubmit={submitHandler}
            >
                <Input
                    inputProps={{
                        type:'text',
                        name:'firstName',
                        placeholder:'First Name'
                    }}
                    errorMessage='First Name cannot be emty'
                />
                <Input
                    inputProps={{
                        type:'text',
                        name:'lastName',
                        placeholder:'Last Name'
                    }}
                    errorMessage='Last Name cannot be emty'
                />
                <Input
                    inputProps={{
                        type:'email',
                        name:'email',
                        placeholder:'Email Address'
                    }}
                    errorMessage='Lookslike this is not an email'
                />
                <Input
                    inputProps={{
                        type:'password',
                        name:'password',
                        placeholder:'Password'
                    }}
                    errorMessage='Password cannot be emty'
                />

                <Button type='submit'>
                    Claim your free trial
                </Button>

                <p className={classes['form-paragraph']}>
                    By clicking the button, you are agreeing to our <span>Terms and Services</span>
                </p>
            </form>
        </div>
    );
};

export default Form;