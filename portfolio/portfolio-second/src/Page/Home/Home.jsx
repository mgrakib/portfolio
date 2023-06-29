import Experience from "../../components/Experience/Experience";
import Feedback from "../../components/Feedback/Feedback";
import HeroBannar from "../../components/HeroBannar/HeroBannar";
import MyServices from "../../components/MyServices/MyServices";
import PricePlan from "../../components/PricePlan/PricePlan";


const Home = () => {
    return (
		<div className='mt-8'>
			<HeroBannar />
			<Experience />
			<MyServices />
			<PricePlan />
			<Feedback />

			<div className='p-[10px] gradiant-bg text-gray-color'>
				<p>© 2023 All Rights Reserved.</p>
			</div>
		</div>
	);
};

export default Home;