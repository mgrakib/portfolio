import Container from "../Container/Container";
import { BsArrowDownCircle, BsRocketTakeoff } from "react-icons/bs";
import { BiMessageRoundedDots, BiSupport } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import './Home.css'

import img from '../../img/iqbaltasif-1.jpg'


const Home = () => {
    return (
		<section
			id='home'
			className='w-full pt-28'
		>
			<div >
				<Container>
					<div className='flex justify-between mb-[40px]'>
						<div className='w-1/2'>
							<div className='mb-[30px]'>
								<p className='text-[30px] font-[400] text-primary-color mb-6'>
									Hi, I am
								</p>
								<h1 className='text-[75px] font-[800] leading-[74px] mb-[25px]'>
									Md. Golam Rakib
								</h1>

								<div>
									<h4 className='flex items-center text-[20px] mb-[12px] font-[700]'>
										WordPress | Shopify | Wix Expert
									</h4>
								</div>

								<p className='leading-[28px] text-black-color'>
									Professional WordPress wooCommerce Shopify
									Wix Expert working in different marketplaces
									with 4 years of experience
								</p>
							</div>

							<div className='w-full'>
								<div className='flex gap-[30px] items-center text-[13px] font-[600] py-[10px]'>
									<div className='w-auto'>
										<button className='uppercase bg-primary-color text-white py-[16px] px-[42px] rounded-[20px] leading-4 flex items-center gap-[5px] border border-primary-color hover:bg-transparent hover:text-secondary-color hover:border-secondary-color duration-300'>
											<BsArrowDownCircle className='font-bold' />
											Download CV
										</button>
									</div>
									<div className='w-auto'>
										<button className='uppercase border border-primary-color text-primary-color py-[16px] px-[50px] rounded-[20px] leading-4 flex items-center gap-[5px] hover:bg-secondary-color hover:text-white hover:border-secondary-color duration-300'>
											<BiMessageRoundedDots className='font-bold' />{" "}
											About Me
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='w-1/2 '>
							<div className='flex px-[15px]'>
								<div>
									<img
										src={img}
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='p-[30px] rounded-xl shadow-[0px_0px_10px_4px_rgba(0,0,0,.1)] '>
						<div className='flex items-center w-full '>
							<div className='flex justify-evenly w-full'>
								<div className='flex gap-2'>
									<div>
										<span className='service'>
											<IoDiamondOutline />
										</span>
									</div>
									<div>
										<p className='text-black-color text-[18px] font-[600]'>
											4 Years Job
										</p>
										<p className='text-light-secondary-color'>
											Experience
										</p>
									</div>
								</div>
								<div className='flex gap-2'>
									<div>
										<span className='service'>
											<BsRocketTakeoff />
										</span>
									</div>
									<div>
										<p className='text-black-color text-[18px] font-[600]'>
											120+ Jobs
										</p>
										<p className='text-light-secondary-color'>
											Completed
										</p>
									</div>
								</div>
								<div className='flex gap-2'>
									<div>
										<span className='service'>
											<BiSupport />
										</span>
									</div>
									<div>
										<p className='text-black-color text-[18px] font-[600]'>
											Support
										</p>
										<p className='text-light-secondary-color'>
											Online 24/7
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Home;