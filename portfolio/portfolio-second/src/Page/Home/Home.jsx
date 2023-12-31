// import Experience from "../../components/Experience/Experience";
// import Feedback from "../../components/Feedback/Feedback";
// import HeroBannar from "../../components/HeroBannar/HeroBannar";
// import MyServices from "../../components/MyServices/MyServices";
// import PricePlan from "../../components/PricePlan/PricePlan";


// const Home = () => {
//     return (
// 		<div
// 			className='mt-8 w-full '
			
// 		>
// 			<HeroBannar />
// 			<Experience />
// 			<MyServices />
// 			<PricePlan />
// 			<Feedback />

		
// 		</div>
// 	);
// };

// export default Home;


import { Helmet } from 'react-helmet-async';
import Experience from '../../components/Experience/Experience';
import Feedback from '../../components/Feedback/Feedback';
import HeroBannar from '../../components/HeroBannar/HeroBannar';
import MyServices from '../../components/MyServices/MyServices';
import PricePlan from '../../components/PricePlan/PricePlan';
import SmoothScrollTwo from '../../components/SmoothScroll/SmoothScrollTwo';
import './Home.css'

const Home = () => {
    return (
		<>
			<Helmet>
				<title>Home - MG Rakib</title>
			</Helmet>
			<SmoothScrollTwo />
			<div
				id='main-content'
				className='md:mt-8 w-full h-full'
			>
				<HeroBannar />
				<Experience />
				<MyServices />
				<PricePlan />
				<Feedback />
			</div>
		</>
	);
};

export default Home;