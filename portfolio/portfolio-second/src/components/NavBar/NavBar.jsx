import React, { useContext } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const { isOpen, setIsOpen, routeName, setRouteName } =
		useContext(AuthContext);
    return (
		<>
			<div
				className={`bg-[#20202a] w-[230px] h-[calc(100vh-30px)] z-[999] -right-[150px] absolute duration-500 ${
					isOpen && "active-link"
				}`}
			>
				<div>
					<div
						style={{
							backgroundImage: `linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)`,
						}}
						className='w-full h-[70px] flex items-center'
					>
						<span className='px-[30px] '>
							{isOpen ? (
								<IoClose
									onClick={() => setIsOpen(!isOpen)}
									className='cursor-pointer text-white text-2xl duration-500'
								/>
							) : (
								<IoMenu
									onClick={() => setIsOpen(!isOpen)}
									className='cursor-pointer text-white text-2xl duration-500'
								/>
							)}
						</span>
					</div>

					<div
						className={` w-[200px] text-[#fafafc] absolute  overflow-hidden top-[200px] text-[13px] font-[500] -left-[62px] opacity-100 leading-3 duration-500 rotate-90 uppercase text-gray-color ${
							isOpen && "opacity-[0]"
						}`}
					>
						{routeName}
					</div>
				</div>

				<div className='h-full  w-full flex items-start mt-3'>
					<ul className='mb-[60px] w-full text-gray-color'>
						<li onClick={() => setIsOpen(false)}>
							<NavLink
								onClick={() => setRouteName("Home")}
								to={"/"}
								className={`${
									isOpen && "active-nav-link"
								} nav-items delay-[0.05s]`}
							>
								Home
							</NavLink>
						</li>

						<li onClick={() => setIsOpen(false)}>
							<NavLink
								onClick={() => setRouteName("History")}
								to={"/history"}
								className={`${
									isOpen && "active-nav-link"
								} nav-items delay-[0.15s]`}
							>
								History
							</NavLink>
						</li>
						<li onClick={() => setIsOpen(false)}>
							<NavLink
								onClick={() => setRouteName("Contact")}
								to={"/contact"}
								className={`${
									isOpen && "active-nav-link"
								} nav-items delay-[0.20s]`}
							>
								Contact
							</NavLink>
						</li>
						
						<li onClick={() => setIsOpen(false)}>
							<NavLink
								className={`${
									isOpen && "active-nav-link"
								} nav-items delay-[0.30s] border-t border-gray-color w-full mt-[12px] pt-[24px]`}
							>
								Light Version
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavBar;