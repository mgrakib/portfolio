/** @format */

import { FaBeer, FaUser } from "react-icons/fa";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import SmoothScrollTwo from "../../components/SmoothScroll/SmoothScrollTwo";
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
	const [process, setProcess]= useState(false)
	const form = useRef();
	const sendEmail = e => {
		e.preventDefault();
		setProcess(true)

		emailjs
			.sendForm(
				"service_yksxk3s",
				"template_pxvgole",
				form.current,
				"nRYBcfGTgniuIuvw3"
			)
			.then(
				result => {
					console.log(result.text);
					form.current.reset();
					Swal.fire({
						icon: "success",
						title: "Yeap...",
						text: "Your Message has been sent. thank you for sharing your valuable message.",
						footer: '<a href="">Why do I have this issue?</a>',
					});
					setProcess(false);
				},
				error => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<Helmet>
				<title>Contact - MG Rakib</title>
			</Helmet>
			<SmoothScrollTwo />
			<div
				id='main-content'
				className=' mb-[30px] w-full h-full'
			>
				<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
					Contact information
				</h3>
				<div className='mb-[30px]'>
					<div className='grid md:grid-cols-3 gap-5 '>
						<div
							data-aos='zoom-in'
							data-aos-offset='0'
							data-aos-duration='1000'
						>
							<div className='p-[30px] gradiant-bg'>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>Country:</h6>
									<span className='text-gray-color'>
										Bangladesh
									</span>
								</div>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>City:</h6>
									<span className='text-gray-color'>
										Dhaka
									</span>
								</div>
								<div className='flex items-center justify-between '>
									<h6>Streat:</h6>
									<span className='text-gray-color'>
										Kashimpur, Gazipur
									</span>
								</div>
							</div>
						</div>

						<div
							data-aos='zoom-in'
							data-aos-offset='0'
							data-aos-duration='1000'
						>
							<div className='p-[30px] gradiant-bg'>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>Email:</h6>
									<span className='text-gray-color'>
										mgrakibbd@gmail.com
									</span>
								</div>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>Telegram:</h6>
									<span className='text-gray-color'>
										@mgrakib
									</span>
								</div>
								<div className='flex items-center justify-between '>
									<h6>Discord:</h6>
									<span className='text-gray-color'>
										mgrakib
									</span>
								</div>
							</div>
						</div>

						<div
							data-aos='zoom-in'
							data-aos-offset='0'
							data-aos-duration='1000'
						>
							<div className='p-[30px] gradiant-bg'>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>Support service:</h6>
									<span className='text-gray-color'>
										+881 81111 5794
									</span>
								</div>
								<div className='flex items-center justify-between mb-[5px]'>
									<h6>Office:</h6>
									<span className='text-gray-color'>
										+881 73144 8023
									</span>
								</div>
								<div className='flex items-center justify-between '>
									<h6>Personal:</h6>
									<span className='text-gray-color'>
										+881 33300 0183
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
					Get in touch
				</h3>

				<div className='p-[30px] gradiant-bg'>
					<form
						ref={form}
						onSubmit={sendEmail}
					>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,#252532 0%,#23232d 100%)`,
							}}
							className='input-container'
						>
							<div className='input-label'>
								<FaUser />
							</div>
							<div>
								<input
									type='text'
									name='user_name'
									id=''
									placeholder='Name'
									className='input-field'
								/>
							</div>
						</div>

						<div
							style={{
								backgroundImage: `linear-gradient(159deg,#252532 0%,#23232d 100%)`,
							}}
							className='input-container'
						>
							<div className='input-label'>
								<FaUser />
							</div>
							<div>
								<input
									type='email'
									name='user_email'
									id=''
									placeholder='Email'
									className='input-field'
								/>
							</div>
						</div>
						<div
							style={{
								backgroundImage: `linear-gradient(159deg,#252532 0%,#23232d 100%)`,
							}}
							className='textarea-container'
						>
							<div className='w-[50px] h-full bg-primary-bg-color absolute top-0 left-0'>
								<div className='input-label'>
									<FaUser />
								</div>
							</div>
							<div className='w-full h-full '>
								<textarea
									name='message'
									id=''
									placeholder='Message'
									className='textarea-field '
								></textarea>
							</div>
						</div>

						<div>
							<button
								disabled={process}
								type='submit'
								value='Send'
								className='text-[12px] font-[600] h-[45px] bg-brand-color px-[35px] inline-flex  items-center uppercase'
							>
								Let's Talk
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
