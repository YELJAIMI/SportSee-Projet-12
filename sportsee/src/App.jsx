import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

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
