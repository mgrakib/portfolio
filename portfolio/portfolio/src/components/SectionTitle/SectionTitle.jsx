
const SectionTitle = ({title, subtitle}) => {
    return (
		<div>
			<h2 className='text-[40px] text-primary-color font-[700] text-center'>
				{title}
			</h2>
			<div className=' text-center mt-2'>
				<div className='relative h-[4px] bg-secondary-color w-[40px] rounded-full inline-block section-dash'></div>
			</div>
			<p className='text-center leading-[74px] text-[20px] font-[500]'>
				{subtitle}
			</p>
		</div>
	);
};

export default SectionTitle;