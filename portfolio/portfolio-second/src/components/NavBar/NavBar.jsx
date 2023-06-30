import './NavBar.css'
import { IoClose, IoMenu } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
    const {
		isOpen,
		setIsOpen,
		routeName,
		setRouteName,
		setColumn,
		showNavItem,
		setShowNavItem,
	} = useAuth();
	
	// shwo inside nav link 



    return (
		<>
			<div
				className={`bg-[#20202a] h-[calc(100vh-30px)] z-[999] duration-500 ${
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
						<span className='px-[30px] hidden md:block'>
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

				<div className=' w-full h-[calc(100%-70px)]'>
					<div>
						<div className='h-full  w-full flex items-start mt-3'>
							<ul className='mb-[60px] w-full text-gray-color'>
								<li onClick={() => {
									setIsOpen(false)
									setShowNavItem(false);
								}}>
									<NavLink
										onClick={() => setRouteName("Home")}
										to={"/"}
										className={`${
											isOpen && "active-nav-link"
										} nav-items `}
									>
										Home
									</NavLink>
								</li>

								<li onClick={() => {
									setIsOpen(false);
									setShowNavItem(false);
								}}>
									<NavLink
										onClick={() => setRouteName("History")}
										to={"history"}
										className={`${
											isOpen && "active-nav-link"
										} nav-items`}
									>
										History
									</NavLink>
								</li>
								<li
									onClick={() => setShowNavItem(!showNavItem)}
								>
									<div
										className={`${
											isOpen && "active-nav-link"
										} nav-items cursor-pointer`}
									>
										Portfolio
									</div>

									{/* inside nav  */}
									<ul
										className={`  shadow-[inset_0_3px_8px_0_rgba(15,15,20,.2)] overflow-hidden bg-[#20202a] duration-1000 ${
											showNavItem
												? "max-h-[500px]"
												: "max-h-[0px]"
										}`}
									>
										<li onClick={() => setIsOpen(false)}>
											<NavLink
												onClick={() => {
													setRouteName(
														"Portfolio (2 column)"
													);
													setColumn(2);
												}}
												to={"/portfolio"}
												className={`${
													isOpen && "active-nav-link"
												} nav-items delay-[0.15s] `}
											>
												Portfolio (2 column)
											</NavLink>
										</li>

										<li onClick={() => setIsOpen(false)}>
											<NavLink
												onClick={() => {
													setRouteName(
														"Portfolio (3 column)"
													);
													setColumn(3);
												}}
												to={"/portfolio"}
												className={`${
													isOpen && "active-nav-link"
												} nav-items delay-[0.15s] `}
											>
												Portfolio (3 column)
											</NavLink>
										</li>
									</ul>
								</li>

								<li onClick={() => {
									setIsOpen(false);
									setShowNavItem(false);
								}}>
									<NavLink
										onClick={() => setRouteName("Contact")}
										to={"/contact"}
										className={`${
											isOpen && "active-nav-link"
										} nav-items `}
									>
										Contact
									</NavLink>
								</li>

								<li onClick={() => {
									setIsOpen(false);
									setShowNavItem(false);
								}}>
									<NavLink
										className={`${
											isOpen && "active-nav-link"
										} nav-items  border-t border-gray-color w-full mt-[12px] pt-[24px]`}
									>
										Light Version
									</NavLink>
								</li>
							</ul>
						</div>
						;
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;




