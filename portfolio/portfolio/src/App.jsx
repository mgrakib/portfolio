/** @format */

import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";

import About from "./assets/components/About/About";
import Home from "./assets/components/Home/Home";
import Experience from "./assets/components/Experience/Experience";
import PortfolioShowcase from "./assets/components/PortfolioShowcase/PortfolioShowcase";
import FeedBack from "./assets/FeedBack/FeedBack";

function App() {
	return (
		<>
			<NavBar />

			<div>
				<Home />
				<About />
				<Experience />
				<PortfolioShowcase />
				<FeedBack />
			</div>
		</>
	);
}

export default App;
