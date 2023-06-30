import useAuth from '../../hooks/useAuth';
import work1 from '../../assets/project/work-1.jpg'
import { BiChevronRight } from 'react-icons/bi';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Portfolio = () => {
    
    const { colmun} = useAuth()
    return (
		<div className='mb-[30px]'>
			<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
				Portfolio
			</h3>

			<div className={`grid grid-cols-${colmun} gap-8`}>
				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
								ORDER NOW{" "}
								<span className='group-hover:ml-1 duration-700'>
									<BiChevronRight />{" "}
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
								ORDER NOW{" "}
								<span className='group-hover:ml-1 duration-700'>
									<BiChevronRight />{" "}
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
								ORDER NOW{" "}
								<span className='group-hover:ml-1 duration-700'>
									<BiChevronRight />{" "}
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
								ORDER NOW{" "}
								<span className='group-hover:ml-1 duration-700'>
									<BiChevronRight />{" "}
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
								ORDER NOW{" "}
								<span className='group-hover:ml-1 duration-700'>
									<BiChevronRight />{" "}
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='1000'
				>
					<div className='gradiant-bg overflow-hidden relative group'>
						<div className='overflow-hidden'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
							}}
							className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
						>
							<h5 className='mb-[15px]'>
								Fitness Trainer UI Card
							</h5>
							{colmun === 2 && (
								<div className='text-gray-color text-[12px] mb-[15px] '>
									My job is simple and sophisticated, so it is
									possible to describe.
								</div>
							)}

							<button className='text-brand-color font-[600] flex items-center group'>
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
	);
};

export default Portfolio;