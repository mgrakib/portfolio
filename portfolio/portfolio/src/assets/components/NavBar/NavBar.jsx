/** @format */

import { Link } from "react-scroll";
import img from "../../img/iqbaltasif-3.png";
import Container from "../Container/Container";
import './NavBar.css'
import { useState } from "react";


const NavBar = () => {
	const [isActive, setIsActive] = useState('home');
	return (
		<div className=' w-full bg-white shadow-md fixed top-0 left-0 z-50'>
			<Container>
				<div className='flex items-center justify-between gap-4'>
					<div className=''>
						<Link to="home" className="cursor-pointer">
							<img
								src={img}
								alt=''
								className='h-[100px]'
							/>
						</Link>
					</div>
					<div className='flex items-center gap-8 list-none'>
						<Link
							className={`${
								isActive === "home" ? "active" : "default"
							}`}
							to='home'
						>
							<li>Home</li>
						</Link>
						<Link
							className={`${
								isActive === "about" ? "active" : "default"
							}`}
							to='about'
						>
							<li>About</li>
						</Link>
						<Link
							className={`${
								isActive === "experience" ? "active" : "default"
							}`}
							to='experience'
						>
							<li>Experience</li>
						</Link>
						<Link
							className={`${
								isActive === "works" ? "active" : "default"
							}`}
							to='works'
						>
							<li>Works</li>
						</Link>
						<Link
							className={`${
								isActive === "services" ? "active" : "default"
							}`}
							to='services'
						>
							<li>Services</li>
						</Link>
						<Link
							className={`${
								isActive === "contact" ? "active" : "default"
							}`}
							to='contact'
						>
							<li>Contact</li>
						</Link>
						<Link
							className={`${
								isActive === "demo" ? "active" : "default"
							}`}
							to='demo'
						>
							<li>Demos</li>
						</Link>
					</div>

					<div>
						<button className='py-[12px] text-white font-[600] px-[24px] bg-primary-color leading-[16px] rounded-full inline-block'>
							HIRE ME
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;
