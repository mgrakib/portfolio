/** @format */

import "./App.css";
import About from "./components/About/About";
import ContractMe from "./components/ContractMe/ContractMe";
import Effect from "./components/Effect/Effect";
import Experience from "./components/Experience/Experience";
import FeedBack from "./components/FeedBack/FeedBack";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MyServices from "./components/MyServices/MyServices";
import NavBar from "./components/NavBar/NavBar";
import PortfolioShowcase from "./components/PortfolioShowcase/PortfolioShowcase";


function App() {
	return (
		<>
			<NavBar />

			<div className="relative ">
				<Effect />
				<Home />
				<About />
				<Experience />
				<PortfolioShowcase />
				<FeedBack />
				<MyServices />
				<ContractMe />
				<Footer />
				
			</div>
		</>
	);
}

export default App;
