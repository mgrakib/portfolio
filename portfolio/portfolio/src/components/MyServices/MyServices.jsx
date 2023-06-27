import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './MyServices.css'
import { PiFolderOpenLight } from "react-icons/pi";


import service1 from '../../assets/services/services1.webp'
import service2 from '../../assets/services/services2.webp'
import service3 from '../../assets/services/services3.webp'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const MyServices = () => {
    return (
		<div
			id='services'
			className='w-full  pt-28'
		>
			<Container>
				<div className='mb-5'>
					<SectionTitle
						title='MY SERVICES'
						subtitle='If you want to know about my service, you can visit my Service'
					/>
				</div>

				<div className='grid grid-cols-3'>
					<div className='px-5'>
						<div className='border border-gray-300 hover:border-secondary-color  group'>
							<div className='overflow-hidden'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='0'
								>
									<img
										src={service1}
										alt=''
										className='group-hover:rotate-2 group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='p-10'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='250'
								>
									<div className='text-primary-color flex items-center justify-between mb-[20px]'>
										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>wordpress website</p>
										</span>

										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>0</p>
										</span>
									</div>
								</div>

								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='500'
								>
									<div className='flex items-center justify-center'>
										<button className='readMore-btn'>
											Read More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='px-5'>
						<div className='border border-gray-300 hover:border-secondary-color group'>
							<div className='overflow-hidden'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='200'
								>
									<img
										src={service2}
										alt=''
										className='group-hover:rotate-2 group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='p-10'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='350'
								>
									<div className='text-primary-color flex items-center justify-between mb-[20px]'>
										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>wordpress website</p>
										</span>

										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>0</p>
										</span>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='550'
								>
									<div className='flex items-center justify-center'>
										<button className='readMore-btn'>
											Read More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='px-5'>
						<div className='border border-gray-300 hover:border-secondary-color group'>
							<div className='overflow-hidden'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='300'
								>
									<img
										src={service3}
										alt=''
										className='group-hover:rotate-2 group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='p-10'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='450'
								>
									<div className='text-primary-color flex items-center justify-between mb-[20px]'>
										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>wordpress website</p>
										</span>

										<span className='flex items-center gap-2'>
											<PiFolderOpenLight />
											<p>0</p>
										</span>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='600'
								>
									<div className='flex items-center justify-center'>
										<button className='readMore-btn'>
											Read More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MyServices;