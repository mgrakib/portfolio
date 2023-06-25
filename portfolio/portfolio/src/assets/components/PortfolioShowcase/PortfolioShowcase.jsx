import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import project1 from '../../projects/project1.png'
import project2 from '../../projects/project2.png'
import project3 from '../../projects/project3.png'
import project4 from '../../projects/project4.png'
import project5 from '../../projects/project5.png'
import project6 from '../../projects/project6.png'

import { LiaExternalLinkAltSolid, LiaSearchPlusSolid } from "react-icons/lia";
import './PortfolioShowcase.css'
const PortfolioShowcase = () => {
    return (
		<div
			id='portfolioShowcase'
			className='w-full  pt-28'
		>
			<Container>
				<div className='mb-5'>
					<SectionTitle
						title='PORTFOLIO SHOWCASE'
						subtitle='Client works'
					/>
				</div>

				<div className='grid grid-cols-3'>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project1}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									Design simple website car rental website
								</h1>
							</div>
						</div>
					</div>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project2}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									woo commerce website design
								</h1>
							</div>
						</div>
					</div>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project3}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									Customize blog website and theme
								</h1>
							</div>
						</div>
					</div>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project4}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									Design WordPress Elementor website
								</h1>
							</div>
						</div>
					</div>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project5}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									Design simple website car rental website
								</h1>
							</div>
						</div>
					</div>
					<div className='px-[15px] mb-[30px]'>
						<div className=''>
							<div className='group w-full relative overflow-hidden'>
								<img
									src={project6}
									alt=''
									className='group-hover:scale-110 duration-1000'
								/>
								<div className='overlayDiv'>
									<div className=' py-4 flex items-center justify-center w-full gap-2'>
										<div className='projectIconDiv'>
											<LiaSearchPlusSolid className='projectIcon' />
										</div>
										<div className='projectIconDiv'>
											<LiaExternalLinkAltSolid className='projectIcon' />
										</div>
									</div>
								</div>
							</div>

							<div className='py-[15px]'>
								<h1 className='text-[20px] text-center font-[500]'>
									woo commerce website design
								</h1>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default PortfolioShowcase;