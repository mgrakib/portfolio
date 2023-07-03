/** @format */

import "./MyServices.css";

import { BiChevronRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SectionTitle from "../SectionTitle/SectionTitle";
AOS.init();

import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const MyServices = () => {
	return (
		<div className='mb-[30px]'>
			<SectionTitle title={"My Services"} />

			<div className='grid md:grid-cols-3 gap-5'>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Web Application Development
								</h6>
								<p className='mb-[16px] text-gray-color'>
									As a web application developer, I can create
									dynamic and user-friendly web applications
									tailored to your specific needs. With my
									expertise in front-end and back-end
									technologies, I can deliver a robust and
									scalable solution that enhances your online
									presence and drives user engagement.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Full-Stack Development
								</h6>
								<p className='mb-[16px] text-gray-color'>
									As a full-stack developer, I can provide
									end-to-end web development services,
									covering both front-end and back-end aspects
									of your project. With a strong understanding
									of the entire web development process, I can
									handle every stage of your project, from
									concept to deployment.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Custom Web Development
								</h6>
								<p className='mb-[16px] text-gray-color'>
									As a custom web developer, I specialize in
									creating unique and bespoke web solutions
									that are designed specifically for your
									business. I understand that every client has
									different needs and objectives, and I am
									committed to delivering a custom web
									application that meets and exceeds your
									expectations.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Front-End Development
								</h6>
								<p className='mb-[16px] text-gray-color'>
									As a front-end developer, I specialize in
									crafting intuitive and engaging user
									interfaces that enhance the user experience
									of your web application. I understand the
									importance of creating a visually appealing
									and user-friendly design that leaves a
									lasting impression on your audience.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Back-End Development
								</h6>
								<p className='mb-[16px] text-gray-color'>
									As a back-end developer, I specialize in
									building the engine that powers your web
									application. I understand the critical role
									of the back-end in handling data, processing
									requests, and ensuring the security and
									scalability of your application.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<Tilt>
						<div>
							<div className='p-[30px]'>
								<h6 className='text-white mb-[15px]'>
									Maintenance and Support
								</h6>
								<p className='mb-[16px] text-gray-color'>
									In addition to development, I also provide
									comprehensive maintenance and support
									services to ensure the continued success of
									your web application. I understand that
									maintaining a reliable and secure
									application is crucial for your business
									operations.
								</p>

								<Link to="/contact" className='text-brand-color font-[600] flex items-center group'>
									Let's Talk{" "}
									<span className='group-hover:ml-1 duration-700'>
										<BiChevronRight />{" "}
									</span>
								</Link>
							</div>
						</div>
					</Tilt>
				</div>
			</div>
		</div>
	);
};

export default MyServices;
