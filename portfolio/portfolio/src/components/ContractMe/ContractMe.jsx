import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './ContractMe.css'
import { CiLocationOn } from "react-icons/ci";

const ContractMe = () => {
    return (
		<div
			id='contact'
			className='w-full  pt-28'
		>
			<Container>
				<div className='mb-5'>
					<SectionTitle title='CONTRACT ME' />
				</div>

				<div className='grid grid-cols-2'>
					<div className='p-5'>
						<div>
							<h4 className='text-[25px] font-[400] text-center mb-5'>
								Feel Free To Drop Us A Line
							</h4>
						</div>
						<div>
							<p className='text-[15px] font-[400] text-justify mb-5'>
								Do you want to make a website, do you want to
								discuss details about your website, do you want
								to make WordPress, Wix, Shopify any type of
								business, blog, or e-commerce website, for your
								online shop, I have many demos of woo-commerce,
								then contact me
							</p>
						</div>

						<div>
							<div className='mt-[30px] '>
								<div className='grid grid-cols-2 gap-5'>
									<div>
										<input
											type='text'
											placeholder='Name'
											className='contact-input'
										/>
									</div>
									<div>
										<input
											type='text'
											placeholder='Email'
											className='contact-input'
										/>
									</div>
									<div>
										<input
											type='text'
											placeholder='Phone'
											className='contact-input'
										/>
									</div>
									<div>
										<input
											type='text'
											placeholder='Company'
											className='contact-input'
										/>
									</div>
									<div className='col-span-2'>
										<textarea
											name=''
											id=''
											placeholder='Message'
											className='contact-input h-[100px]'
										></textarea>
									</div>
								</div>
								<div className='flex items-center justify-center mt-[15px]'>
									<button className='bg-primary-color text-white py-[15px] px-[45px] rounded-full text-[15px] font-[500] leading-[15px]'>
										SEND MESSAGE
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='p-5'>
						<div>
							<iframe
								title='Google Map'
								width='600'
								height='450'
								frameBorder='0'
								style={{ border: 0 }}
								src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2577.332982063171!2d90.3111519214847!3d23.999334298427687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAwJzA1LjUiTiA5MMKwMTgnNDMuNyJF!5e0!3m2!1sen!2sbd!4v1687775582619!5m2!1sen!2sbd'
								allowFullScreen=''
							></iframe>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-3 mt-[50px]'>
					<div className='px-5'>
						<div className='bg-white px-4 pt-[10px] pb-[30px] rounded-md border text-center shadow-[0px_0px_30px_0px_rgba(0,0,0,.09)]'>
							<div className='p-[10px] bg-[#3A3A3A] inline-block border border-primary-color rounded-md mx-auto mb-[25px]'>
								<CiLocationOn className='text-primary-color text-2xl' />
							</div>

							<div>
								<h2 className='text-[20px] font-[500] capitalize text-[#151515] mb-[10px]'>
									Address
								</h2>
								<p className=''>
									Dhanmondi 9A,Dhaka Bangladesh
								</p>
							</div>
						</div>
					</div>
					<div className='px-5'>
						<div className='bg-white px-4 pt-[10px] pb-[30px] rounded-md border text-center shadow-[0px_0px_30px_0px_rgba(0,0,0,.09)]'>
							<div className='p-[10px] bg-[#3A3A3A] inline-block border border-primary-color rounded-md mx-auto mb-[25px]'>
								<CiLocationOn className='text-primary-color text-2xl' />
							</div>

							<div>
								<h2 className='text-[20px] font-[500] capitalize text-[#151515] mb-[10px]'>
									Business Talk
								</h2>
								<p className=''>+8801811387658</p>
							</div>
						</div>
					</div>
					<div className='px-5'>
						<div className='bg-white px-4 pt-[10px] pb-[30px] rounded-md border text-center shadow-[0px_0px_30px_0px_rgba(0,0,0,.09)]'>
							<div className='p-[10px] bg-[#3A3A3A] inline-block border border-primary-color rounded-md mx-auto mb-[25px]'>
								<CiLocationOn className='text-primary-color text-2xl' />
							</div>

							<div>
								<h2 className='text-[20px] font-[500] capitalize text-[#151515] mb-[10px]'>
									Email
								</h2>
								<p className=''>Iqbaltasif2017@Gmail.Com</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ContractMe;