
import { BiChevronRight } from 'react-icons/bi';
import './History.css'
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';

import RecommendationModal from '../../components/DialogModal/RecommendationModal';

const History = () => {

	
    return (
		<div className='mt-8 w-full relative'>
			<div className=''>
				<div className='grid grid-cols-2 gap-5 '>
					<EducationHistory />

					<WorkHistory />
				</div>
			</div>

			<div className='absolute  top-0'>
				<RecommendationModal />
			</div>
		</div>
	);
};

export default History;