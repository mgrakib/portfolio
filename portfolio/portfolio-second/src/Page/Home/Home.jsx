import Experience from "../../components/Experience/Experience";
import Feedback from "../../components/Feedback/Feedback";
import HeroBannar from "../../components/HeroBannar/HeroBannar";
import MyServices from "../../components/MyServices/MyServices";
import PricePlan from "../../components/PricePlan/PricePlan";


const Home = () => {
    return (
		<div
			className='mt-8 w-full '
			
		>
			<HeroBannar />
			<Experience />
			<MyServices />
			<PricePlan />
			<Feedback />

		
		</div>
	);
};

export default Home;