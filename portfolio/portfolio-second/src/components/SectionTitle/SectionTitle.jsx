import React from 'react';

const SectionTitle = ({title}) => {
    return (
		<h3 className='text-center md:text-start text-[17px] font-[600] pb-[30px] text-white-color'>
			{title}
		</h3>
	);
};

export default SectionTitle;