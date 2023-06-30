import useAuth from '../../hooks/useAuth';

const Portfolio = () => {
    
    const { colmun} = useAuth()
    return (
		<div className='mb-[30px]'>
			<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
				Portfolio
			</h3>

			<div className={`grid grid-cols-${colmun} gap-5`}>
				<div className='p-[30px] gradiant-bg'></div>
				<div className='p-[30px] gradiant-bg'></div>
				<div className='p-[30px] gradiant-bg'></div>
				<div className='p-[30px] gradiant-bg'></div>
			</div>
		</div>
	);
};

export default Portfolio;