/** @format */

import "./SidBar.css";
import {
    FaDownload,
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import profile from "../../assets/img/profile.jpg";
import { useEffect, useState } from "react";



const SidBar = () => {
   
	
	return (
		<div className='w-[290px] min-w-[290] bg-secondary-bg-color h-[calc(100vh-30px)] relative z-[999] shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'>
			<div className='absolute z-[9999] left-0 top-0 h-[235px] bg-gradient-to-r light-gradiant w-full text-center shadow-[0_1px_4px_0_rgba(15,15,20,.1)] p-[30px]'>
				<div className='w-[90px] h-[90px] mx-auto rounded-full relative mb-[15px]'>
					<img
						src={profile}
						alt=''
						className=' w-full h-full rounded-full object-cover'
					/>
				</div>
				<div>
					<h4 className='text-[#fafafc] mb-[10px]'>Artur Carter</h4>
				</div>
				<div className='text-small text-gray-color'>
					Front-end Deweloper <br /> Ui/UX Designer
				</div>
			</div>

			{/* socil link  */}

			<div className='absolute z-[999] left-0 bottom-0 h-[50px] bg-gradient-to-r light-gradiant w-full shadow-[0px_1px_4px_0px_rgba(15, 15, 20, 0.1)] px-[35px] flex items-center justify-center gap-3 text-[13px] text-gray-color'>
				<a href=''>
					<FaLinkedin />
				</a>
				<a href=''>
					<FaDribbble />
				</a>
				<a href=''>
					<FaGithub />
				</a>
				<a href=''>
					<FaTwitter />
				</a>
				<a href=''>
					<FaFacebook />
				</a>
			</div>

			{/* scroll bar  */}
			<div
				id='my-scrollbar'
				className='w-full h-[calc(100vh-30px)] overflow-y-auto block  px-[15px] scrollbar'
			>
				<div
					
					className='pt-[240px]  pb-[50px] w-full  text-black scroll-div'
				>
					<div
						
					>
						{/* info  */}
						<div className='py-[15px] border-b border-gray-color'>
							<ul>
								<li>
									<h6>Residence:</h6>
									<span>Canada</span>
								</li>
								<li>
									<h6>City:</h6>
									<span>Toronto</span>
								</li>
								<li>
									<h6>Age:</h6>
									<span>26</span>
								</li>
							</ul>
						</div>

						{/* language  */}
						<div className='pt-[30px] pb-[15px]  border-b border-gray-color'>
							<div className='language-div '>
								<div className='w-[65%]  mx-auto mb-[15px] text-center'>
									<CircularProgressbar
										className='mb-[8px]'
										value={100}
										text={`${100}%`}
										strokeWidth={5}
										styles={buildStyles({
											textColor:
												"var(--light-gray-color)",
											pathColor: "var(--brand-color)",
											trailColor:
												"var(--primary-bg-color)",
										})}
									/>
									<h6>Bangla</h6>
								</div>
							</div>
							<div className='language-div '>
								<div className='w-[65%]  mx-auto mb-[15px] text-center'>
									<CircularProgressbar
										className='mb-[8px]'
										value={80}
										text={`${80}%`}
										strokeWidth={5}
										styles={buildStyles({
											textColor:
												"var(--light-gray-color)",
											pathColor: "var(--brand-color)",
											trailColor:
												"var(--primary-bg-color)",
										})}
									/>
									<h6>English</h6>
								</div>
							</div>
							<div className='language-div '>
								<div className='w-[65%]  mx-auto mb-[15px] text-center'>
									<CircularProgressbar
										className='mb-[8px]'
										value={40}
										text={`${40}%`}
										strokeWidth={5}
										styles={buildStyles({
											textColor:
												"var(--light-gray-color)",
											pathColor: "var(--brand-color)",
											trailColor:
												"var(--primary-bg-color)",
										})}
									/>
									<h6>Hindi</h6>
								</div>
							</div>
						</div>

						{/* skills  */}

						<div className='pt-[30px] pb-[15px] border-b border-gray-color'>
							{/* HTML  */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>html</h6>
									<span>96%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[96%]'></span>
								</div>
							</div>
							{/* CSS */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>css</h6>
									<span>95%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[95%]'></span>
								</div>
							</div>

							{/* JS */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>Js</h6>
									<span>80%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[80%]'></span>
								</div>
							</div>

							{/* react  */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>react</h6>
									<span>70%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[70%]'></span>
								</div>
							</div>
							{/* next.js  */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>next.js</h6>
									<span>30%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[30%]'></span>
								</div>
							</div>
							{/* express.js  */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>express.js</h6>
									<span>70%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[70%]'></span>
								</div>
							</div>
							{/* mongoDb  */}
							<div className='mb-[15px]'>
								<div className='skill-label'>
									<h6>mongoDb</h6>
									<span>45%</span>
								</div>
								<div className=' skill-progress-bar-div'>
									<span className='skill-progress-bar w-[45%]'></span>
								</div>
							</div>
						</div>

						{/* other skills */}
						<div className='py-[15px] other-skill  border-b border-gray-color'>
							<ul>
								<li className='mb-[5px] text-gray-color'>
									Tailwind, Bootstrap
								</li>
								<li className='mb-[5px] text-gray-color'>
									Stylus, Sass, Less
								</li>
								<li className='mb-[5px] text-gray-color'>
									Firebase, GitHub
								</li>
								<li className='text-gray-color'>
									JSON Web Token (JWT)
								</li>
							</ul>
						</div>

						<div className='py-[15px] '>
							<a
								href='https://drive.google.com/'
								target='blank'
								className='text-[12px] uppercase text-gray-color font-[600] flex items-center gap-2 '
							>
								{" "}
								Download cv{" "}
								<FaDownload className='font-[300]' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidBar;
