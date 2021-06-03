import { GlobalStyle } from "./AppStyles";
import Countries from "./Pages/Countries";

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<Countries />
		</div>
	);
};

export default App;
