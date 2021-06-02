import "./AppStyles.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//styling
import { GlobalStyle } from "./AppStyles";
import Home from "./Pages/Home";
import Countries from "./Pages/Countries";

const App = () => {
	return (
		<div className="App">
			<>
				<GlobalStyle />
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/countries" component={Countries} />
					</Switch>
				</BrowserRouter>
			</>
		</div>
	);
};

export default App;
