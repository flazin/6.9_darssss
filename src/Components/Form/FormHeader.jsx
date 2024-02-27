import classes from './FormHeader.module.css';

const FormHeader = () => {
    const h2TagText = 'Try it free 7 days ';
    const spanTagText = 'then $20/mo. thereafter';

    return (
        <header className={classes['form-header']}>
            <h2>
                {h2TagText}
                <span>
                    {spanTagText}
                </span>
            </h2>
        </header>
    );
};

export default FormHeader;