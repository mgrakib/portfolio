import React, { useContext } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const WorkHistory = () => {
	const { setIsOpenModal } = useContext(AuthContext);
	function openModal() {
		setIsOpenModal(true);
	}
    return (
		<div>
			<div className=' p-[15px]'>
				<h4 className='mb-[30px] text-white'>Work History</h4>

				<div className='history-container'>
					{/* BSC */}
					<div className='relative'>
						<div className='w-[20px] h-[20px] rounded-full absolute top-[6px] -right-[2px] bg-[#fafafc] z-40 animate-ping opacity-75'></div>
						<div className='w-[15px] h-[15px] rounded-full absolute top-[8px] right-0 bg-[#1e1e28] z-40 border-[3px] border-brand-color shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'></div>

						<div
							data-aos='zoom-in'
							data-aos-offset='0'
							data-aos-duration='1000'
						>
							<div
								style={{
									backgroundImage: `linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)`,
								}}
								className='relative mr-[45px] mb-[30px] p-[30px]'
							>
								<h5 className='capitalize'>
									Test Company Name
								</h5>

								<div className='text-[12px] text-gray-color italic mt-[5] mb-[15px]'>
									Front-End Developer
								</div>

								<div className='mb-[15px] text-gray-color'>
									<span
										style={{
											boxShadow: `inset 0 3px 8px 0 rgba(15,15,20,.2)`,
										}}
										className='text-[12px] bg-primary-bg-color py-[5px] px-[15px] rounded-[15px]'
									>
										{" "}
										jan 2023 - Continue{" "}
									</span>
								</div>

								<div className='text-[12px] text-gray-color mb-[15px] pointer'>
									Optimize your website and apps performance
									using latest technology.
								</div>

								<button
									onClick={openModal}
									className='text-brand-color font-[600] flex items-center group cursor-pointer'
								>
									RECOMMENDATION{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkHistory;