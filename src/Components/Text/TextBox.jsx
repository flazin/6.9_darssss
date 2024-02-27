import classes from './TextBox.module.css';

const TextBox = () => {
    const h1TagText = 'Learn to code by watching others';
    const pTagText = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great,but understanding how developers think is invaluable.';

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>
                {h1TagText}
            </h1>
            <p className={classes.description}>
                {pTagText}
            </p>
        </div>
    );
};

export default TextBox;