/** @format */

import * as Scroll from "react-scroll";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";


import img from "../../assets/img/iqbaltasif-3.png";
import Container from "../Container/Container";
import './NavBar.css'
import { useState } from "react";


const NavBar = () => {
	const [isActive, setIsActive] = useState('home');
	console.log(isActive)
	return (
		<div className=' w-full bg-white shadow-md fixed top-0 left-0 z-50'>
			<Container>
				<div className='flex items-center justify-between gap-4'>
					<div className=''>
						<Link
							onClick={() => setIsActive("home")}
							to='home'
							className='cursor-pointer'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<img
								src={img}
								alt=''
								className='h-[100px]'
							/>
						</Link>
					</div>
					<div className='flex items-center gap-8 list-none'>
						<Link
							onClick={() => setIsActive("home")}
							className={`${
								isActive === "home" ? "active" : "default"
							}`}
							to='home'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<li>Home</li>
						</Link>
						<Link
							onClick={() => setIsActive("about")}
							className={`${
								isActive === "about" ? "active" : "default"
							}`}
							to='about'
							activeClass='active'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<li>About</li>
						</Link>
						<Link
							onClick={() => setIsActive("experience")}
							className={`${
								isActive === "experience" ? "active" : "default"
							}`}
							to='experience'
						>
							<li>Experience</li>
						</Link>
						<Link
							onClick={() => setIsActive("portfolioShowcase")}
							className={`${
								isActive === "portfolioShowcase"
									? "active"
									: "default"
							}`}
							to='portfolioShowcase'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<li>Works</li>
						</Link>
						<Link
							onClick={() => setIsActive("services")}
							className={`${
								isActive === "services" ? "active" : "default"
							}`}
							to='services'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<li>Services</li>
						</Link>
						<Link
							onClick={() => setIsActive("contact")}
							className={`${
								isActive === "contact" ? "active" : "default"
							}`}
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<li>Contact</li>
						</Link>
						<Link
							className={`${
								isActive === "demo" ? "active" : "default"
							}`}
							to='demo'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
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
