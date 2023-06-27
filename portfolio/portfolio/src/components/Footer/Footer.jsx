/** @format */

import './Footer.css'

import { FaFacebookF, FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "../Container/Container";

const Footer = () => {
	

	return (
		<div className='py-[50px] bg-white text-center'>
			<Container>
				<div>
					<ul className=' text-center'>
						<li className='inline-block p-[5px] '>
							<a
								href=''
								className='social-link'
							>
								<FaFacebookF />
							</a>
						</li>
						<li className='inline-block p-[5px] '>
							<a
								href=''
								className='social-link'
							>
								<FaTwitter />
							</a>
						</li>
						<li className='inline-block p-[5px] '>
							<a
								href=''
								className='social-link'
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='inline-block p-[5px] '>
							<a
								href=''
								className='social-link'
							>
								<FaGithubAlt />
							</a>
						</li>
					</ul>
				</div>

				<div className='mt-[15px]'>
					<p>
						Copyright 2023 © All Rights Reserved. Design By Md.
						Golam Rakib
					</p>
				</div>

				
			</Container>
		</div>
	);
};

export default Footer;
