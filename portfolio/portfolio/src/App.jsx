/** @format */

import "./App.css";
import About from "./assets/components/About/About";
import Experience from "./assets/components/Experience/Experience";
import FeedBack from "./assets/components/FeedBack/FeedBack";
import Home from "./assets/components/Home/Home";
import NavBar from "./assets/components/NavBar/NavBar";
import PortfolioShowcase from "./assets/components/PortfolioShowcase/PortfolioShowcase";


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
