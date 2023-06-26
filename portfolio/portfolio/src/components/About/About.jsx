import Container from '../Container/Container';
import './About.css'

import img from "../../assets/img/about_pic.png";
import { FiUser } from "react-icons/fi";
import { BsTelephone, BsEnvelopeAt } from "react-icons/bs";

const About = () => {
    return (
		<div
			id='about'
			className='w-full h-[100vh]  pt-28'
		>
			<Container>
				<div>
					<div className='flex justify-between gap-5'>
						<div className='w-1/2'>
							<img
								src={img}
								alt=''
								className='w-[85%] mx-auto'
							/>
						</div>
						<div className='w-1/2 px-4'>
							<div>
								<p className='text-[18px] font-[500] mb-3 text-light-secondary-color'>
									My Intro​
								</p>
								<h3 className='text-[40px] leading-[74px] font-[700] mb-[25px]'>
									About Me
								</h3>

								<div>
									<p className='text-[16px] leading-[28px] font-[400] mb-5'>
										Working As A Professional WordPress |
										Woocommerce | Shopify | Wix Expert Since
										2016 And Completed Over 120 Web Projects
										For 85 Clients At Various Marketplaces.
									</p>

									<div>
										<ul className=''>
											<li className='flex items-center border-b'>
												<FiUser />{" "}
												<span className='pl-[6px]'>
													Iqbal Tasif
												</span>
											</li>
											<li className='flex items-center mt-[3px] border-b'>
												<BsTelephone />
												<span className='pl-[6px]'>
													+8801811387658
												</span>
											</li>
											<li className='flex items-center mt-[3px]'>
												<BsEnvelopeAt />{" "}
												<span className='pl-[6px]'>
													iqbaltasif2017@gmail.com
												</span>
											</li>
										</ul>
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

export default About;