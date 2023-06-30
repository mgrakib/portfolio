
import { BiChevronRight } from 'react-icons/bi';
import './History.css'
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';

const History = () => {
    return (
		<div className='mt-8 w-full '>
			<div className='grid grid-cols-2 gap-5'>
                <EducationHistory />
                
                <WorkHistory />
			</div>
		</div>
	);
};

export default History;