import { BiChevronRight } from 'react-icons/bi';
import './PricePlan.css'
const PricePlan = () => {
    return (
		<div className='mb-[30px]'>
			<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
				My Services
			</h3>

			<div className='grid grid-cols-3 gap-5'>
				<div className='p-[30px] gradiant-bg text-center flex flex-col items-center'>
					<h6 className='mb-[25px]'>Starter Price</h6>

					<div className='mb-[30px] relative px-[10px] inline-flex items-center gap-[6px] text-light-gray-color'>
						<span>$</span>
						<span className='text-[32px] font-bold text-brand-color'>
							FREE
						</span>
						<span>hour</span>
						<span className='absolute text-brand-color top-[5px] right-0'>
							*
						</span>
					</div>

					<div>
						<ul className='flex flex-col items-center'>
							<li className='available'>Ui Design</li>
							<li className='available'>Web Development</li>
							<li className='unavailable'>Logo design</li>
							<li className='unavailable'>SEO optimization</li>
							<li className='unavailable'>
								WordPress integration
							</li>
						</ul>
					</div>

					<button className='text-brand-color font-[600] flex items-center group mt-2'>
						ORDER NOW{" "}
						<span className='group-hover:ml-1 duration-700'>
							<BiChevronRight />{" "}
						</span>
					</button>
					<div>
						<p className='text-[10px] text-gray-color'>
							* Free only when ordering paid services
						</p>
					</div>
				</div>
				<div className='p-[30px] gradiant-bg text-center flex flex-col items-center'>
					<h6 className='mb-[25px]'>Hourly Payment</h6>

					<div className='mb-[30px] relative px-[10px] inline-flex items-center gap-[6px] text-light-gray-color'>
						<span>$</span>
						<span className='text-[32px] font-bold text-brand-color'>
							29
						</span>
						<span>hour</span>
					</div>

					<div>
						<ul className='flex flex-col items-center'>
							<li className='available'>Ui Design</li>
							<li className='available'>Web Development</li>
							<li className='unavailable'>Logo design</li>
							<li className='unavailable'>SEO optimization</li>
							<li className='unavailable'>
								WordPress integration
							</li>
						</ul>
					</div>
					<button className='text-brand-color font-[600] flex items-center group mt-2'>
						ORDER NOW{" "}
						<span className='group-hover:ml-1 duration-700'>
							<BiChevronRight />{" "}
						</span>
					</button>
				</div>
				<div className='p-[30px] gradiant-bg text-center flex flex-col items-center'>
					<h6 className='mb-[25px]'>Full Time</h6>

					<div className='mb-[30px] relative px-[10px] inline-flex items-center gap-[6px] text-light-gray-color'>
						<span>$</span>
						<span className='text-[32px] font-bold text-brand-color'>
							2999
						</span>
						<span>hour</span>
						<span className='absolute text-brand-color top-[5px] right-0'>
							*
						</span>
					</div>

					<div>
						<ul className='flex flex-col items-center'>
							<li className='available'>Ui Design</li>
							<li className='available'>Web Development</li>
							<li className='unavailable'>Logo design</li>
							<li className='unavailable'>SEO optimization</li>
							<li className='unavailable'>
								WordPress integration
							</li>
						</ul>
					</div>
					<button className='text-brand-color font-[600] flex items-center group mt-2'>
						ORDER NOW{" "}
						<span className='group-hover:ml-1 duration-700'>
							<BiChevronRight />{" "}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PricePlan;