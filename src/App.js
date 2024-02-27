import classes from './App.module.css';
import TextBox from './Components/Text/TextBox';
import Form from './Components/Form/From';

const App = () => {
	return (
		<main>
			<div className={classes.container}>
				<TextBox />
				<Form />
			</div>
		</main>
	);
}

export default App;
