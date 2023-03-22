import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />

				<main>
					<SideNavBar />
					<div className="mainContainer">
						<Routes>
							<Route exact path="/" element={<Home />}></Route>
							<Route path="user/:id" element={<Dashboard />}></Route>
							<Route path="*" element={<Error />} />
						</Routes>
					</div>
				</main>
			</div>
		</Router>
	);
}

export default App;
