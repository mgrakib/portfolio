
import { BiChevronRight } from 'react-icons/bi';
import './History.css'

const History = () => {
    return (
		<div className='mt-8 w-full '>
			<div className='grid grid-cols-2 gap-5'>
				<div className=' p-[15px]'>
					<h4 className='mb-[30px] text-white'>Education</h4>

					<div className='history-container'>
						{/* BSC */}
						<div className='relative'>
							<div className='w-[20px] h-[20px] rounded-full absolute top-[6px] -right-[2px] bg-[#fafafc] z-40 animate-ping opacity-75'></div>
							<div className='w-[15px] h-[15px] rounded-full absolute top-[8px] right-0 bg-[#1e1e28] z-40 border-[3px] border-brand-color shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'></div>

							<div
								style={{
									backgroundImage: `linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)`,
								}}
								className='relative mr-[45px] mb-[30px] p-[30px]'
							>
								<h5 className='capitalize'>
									European University of Bangladesh
								</h5>

								<div className='text-[12px] text-gray-color italic mt-[5] mb-[15px]'>
									Student
								</div>

								<div className='mb-[15px] text-gray-color'>
									<span
										style={{
											boxShadow: `inset 0 3px 8px 0 rgba(15,15,20,.2)`,
										}}
										className='text-[12px] bg-primary-bg-color py-[5px] px-[15px] rounded-[15px]'
									>
										{" "}
										jan 2021 - Continue{" "}
									</span>
								</div>

								<div className='text-[12px] text-gray-color mb-[15px] pointer'>
									Bachelor's Degree in Computer Science
									European University of Bangladesh, Dhaka,
									Bangladesh
								</div>
							</div>
						</div>

						{/* diploma  */}
						<div className='relative'>
							<div className='w-[20px] h-[20px] rounded-full absolute top-[6px] -right-[2px] bg-[#fafafc] z-40 animate-ping opacity-75'></div>
							<div className='w-[15px] h-[15px] rounded-full absolute top-[8px] right-0 bg-[#1e1e28] z-40 border-[3px] border-brand-color shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'></div>

							<div
								style={{
									backgroundImage: `linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)`,
								}}
								className='relative mr-[45px] mb-[30px] p-[30px]'
							>
								<h5 className='capitalize'>
									institute of business and technology
								</h5>

								<div className='text-[12px] text-gray-color italic mt-[5] mb-[15px]'>
									Student
								</div>

								<div className='mb-[15px] text-gray-color'>
									<span
										style={{
											boxShadow: `inset 0 3px 8px 0 rgba(15,15,20,.2)`,
										}}
										className='text-[12px] bg-primary-bg-color py-[5px] px-[15px] rounded-[15px]'
									>
										{" "}
										jan 2014 - may 2028{" "}
									</span>
								</div>

								<div className='text-[12px] text-gray-color mb-[15px]'>
									Diploma in Engineering in Computer Science
									Institute of Business and Technology, Dhaka,
									Bangladesh
								</div>

								<button className='text-brand-color font-[600] flex items-center group pointer'>
									Show Cirtificate{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</button>
							</div>
						</div>
						<div className='relative'>
							<div className='w-[20px] h-[20px] rounded-full absolute top-[6px] -right-[2px] bg-[#fafafc] z-40 animate-ping opacity-75'></div>
							<div className='w-[15px] h-[15px] rounded-full absolute top-[8px] right-0 bg-[#1e1e28] z-40 border-[3px] border-brand-color shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'></div>

							<div
								style={{
									backgroundImage: `linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)`,
								}}
								className='relative mr-[45px] mb-[30px] p-[30px]'
							>
								<h5 className='capitalize'>
									Web developer courses
								</h5>

								<div className='text-[12px] text-gray-color italic mt-[5] mb-[15px]'>
									Student
								</div>

								<div className='mb-[15px] text-gray-color'>
									<span
										style={{
											boxShadow: `inset 0 3px 8px 0 rgba(15,15,20,.2)`,
										}}
										className='text-[12px] bg-primary-bg-color py-[5px] px-[15px] rounded-[15px]'
									>
										{" "}
										Dec 2022 - Jun 2023{" "}
									</span>
								</div>

								<div className='text-[12px] text-gray-color mb-[15px]'>
									Converted Photoshop layouts to web pages
									using HTML, CSS, and JavaScript
								</div>

								<button className='text-brand-color font-[600] flex items-center group pointer'>
									ORDER NOW{" "}
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

export default History;