
import { BiChevronRight } from 'react-icons/bi';
import './History.css'
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';

import RecommendationModal from '../../components/DialogModal/RecommendationModal';
import SmoothScrollTwo from '../../components/SmoothScroll/SmoothScrollTwo';
import { Helmet } from 'react-helmet-async';

const History = () => {

	
	return (
		<>
			<Helmet>
				<title>History - MG Rakib</title>
			</Helmet>
			<SmoothScrollTwo />
			<div
				id='main-content'
				className='mt-8 w-full relative h-full'
			>
				<div className=''>
					<div className='grid md:grid-cols-2 gap-5 '>
						<EducationHistory />

						<WorkHistory />
					</div>
				</div>

				<div className='absolute  top-0'>
					<RecommendationModal />
				</div>
			</div>
		</>
	);
};

export default History;