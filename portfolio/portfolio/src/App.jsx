/** @format */

import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import FeedBack from "./components/FeedBack/FeedBack";
import Home from "./components/Home/Home";
import MyServices from "./components/MyServices/MyServices";
import NavBar from "./components/NavBar/NavBar";
import PortfolioShowcase from "./components/PortfolioShowcase/PortfolioShowcase";


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
				<MyServices />
			</div>
		</>
	);
}

export default App;
