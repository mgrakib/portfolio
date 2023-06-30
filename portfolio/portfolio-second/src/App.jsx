/** @format */



import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SidBar from "./components/SidBar/SidBar";
import SmoothScrollTwo from "./components/SmoothScroll/SmoothScrollTwo";


import { HiDotsVertical } from "react-icons/hi";
import bg from "./assets/img/bg.jpg";
import useAuth from "./hooks/useAuth";
import { IoMenu } from "react-icons/io5";

const App = () => {
	const {
		isOpen,
		setIsOpen,
		isSideBarShow,
		setIsSideBarShow,
		setShowNavItem
	} = useAuth();
	return (
		<div className='md:p-[15px]'>
			{/* container div */}
			<div className='relative'>
				<div className='flex w-full h-[calc(100vh-30px)] relative overflow-hidden'>
					{/* sid bar div  */}

					<div
						className={`absolute   z-[999] -left-[290px] md:left-0 md:relative w-[290px] h-full duration-500 ${
							isSideBarShow && "translate-x-[290px]"
						}`}
					>
						<div className='h-[70px] flex items-center absolute w-full justify-start z-[999999] md:hidden'>
							<button
								onClick={() => {
									setIsSideBarShow(!isSideBarShow);
									setIsOpen(false);
								}}
								className={`ml-auto  text-gray-color text-[14px] font-[800] p-[30px] duration-500 ${
									isSideBarShow
										? "translate-x-0"
										: "translate-x-[70px]"
								}`}
							>
								<HiDotsVertical />
							</button>
						</div>
						<SidBar />
					</div>

					{/* OutLet container div  */}
					<div
						className={`relative overflow-hidden w-[100vw] h-[100vh] md:h-[calc(100vh - 30px)] pt-[70px] md:pt-0 md:pr-[80px] duration-500 ${
							isOpen && "acitve-div"
						}`}
					>
						{/* mobile nav item  */}
						<div className='flex justify-between items-center md:hidden w-full h-[70px] px-[30px] bg-[#20202a]  fixed z-[100] top-0 left-0 shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'></div>

						{/* Overlay full page  */}
						<div
							onClick={() => {
								setIsOpen(false);
								setIsSideBarShow(false);
								setShowNavItem(false);
							}}
							className={`absolute z-[99] bg-[rgba(30,30,40,.88)] w-full h-full opacity-0 duration-500 pointer-events-none ${
								(isOpen || isSideBarShow) &&
								"opacity-70 pointer-events-auto"
							}`}
						></div>

						{/* fixed effect  */}
						<div
							style={{ backgroundImage: `url(${bg})` }}
							className='w-[100%] h-[400px] bg-cover bg-center  absolute top-0'
						>
							<div
								style={{
									backgroundImage: `linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)`,
								}}
								className='absolute w-full h-[calc(100vh-30px)] top-0 left-0 '
							></div>
						</div>

						{/* main content div  */}
						<div className='h-full w-full px-[15px] md:p-[20px]'>
							<Outlet />
							<div className='mb-[30px] gradiant-bg px-[30px] py-[15px] text-gray-color'>
								© 2023 All Rights Reserved.
							</div>
						</div>
					</div>

					{/* navbar div  */}
					<div className='w-[250px] h-full translate-x-0  absolute -right-[250px] md:-right-[170px]  z-[999]'>
						<div className='h-[70px] flex items-center absolute w-full justify-start z-[999999] md:hidden bg-red-600'>
							<button
								onClick={() => {
									setIsOpen(!isOpen);
									setIsSideBarShow(false);
								}}
								className={` text-gray-color text-[14px] font-[800] p-[30px] duration-500  ${
									isOpen
										? "-translate-x-[160px]"
										: "-translate-x-[80px]"
								}`}
							>
								<IoMenu />
							</button>
						</div>
						<NavBar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
