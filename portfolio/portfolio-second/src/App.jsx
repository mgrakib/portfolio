
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Outlet } from "react-router-dom";
import "./App.css";
import SidBar from "./components/SidBar/SidBar";

import bg from './assets/img/bg.jpg'


import { useContext, useState } from "react";


import './App.css'
import { AuthContext } from "./AuthPorvider/AuthPorvider";

function App() {
 const { isOpen, setIsOpen } = useContext(AuthContext);
	return (
		<div className='p-[15px] w-[100vw] h-[100vh]  relative '>
			<div className='max-w-[1440px] mx-auto bg-cover w-full h-full relative  overflow-hidden shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'>
				<div className='flex  flex-nowrap relative '>
					<div className='w-[290px]'>
						<SidBar />
					</div>

					{/* nav */}
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
								className={` w-[200px] text-[#fafafc] absolute  overflow-hidden top-[200px] text-[13px] font-[500] -left-[62px] opacity-100 leading-3 duration-500 rotate-90 ${
									isOpen && "opacity-[0]"
								}`}
							>
								Home
							</div>
						</div>
					</div>
					<div>
						<div
							className={` ${
								isOpen && "active-link"
							} relative overflow-y-scroll w-[calc(100vw-290px)] h-[calc(100vh-30px)] duration-500 pr-[80px]`}
						>
							<div className={`absolute z-[99] bg-[rgba(30,30,40,.88)] w-full h-full opacity-0 duration-500 ${isOpen && 'opacity-70'}`}></div>
							{/* fixex bd  */}
							<div
								style={{ backgroundImage: `url(${bg})` }}
								className='w-full h-[400px] bg-cover bg-center bg-fixed '
							>
								{/* overlay for fixex bg  */}
								<div
									style={{
										backgroundImage: `linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)`,
									}}
									className='absolute w-full h-full top-0 left-0 '
								></div>

								<div className='w-full h-[calc(100vh-30px)] overflow-x-auto  z-50 relative scrollbar px-[30px] py-3'>
									<Outlet />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;




{/* <div className='p-[15px] w-[100vw] h-[100vh] relative overflow-hidden'>
	<div className='max-w-[1440px] mx-auto bg-cover w-full h-full relative overflow-hidden shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'>
		<div className='flex flex-nowrap relative '>
			<SidBar />

			
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
						className={` w-[200px] text-[#fafafc] absolute  overflow-hidden top-[200px] text-[13px] font-[500] -left-[62px] opacity-100 leading-3 duration-500 rotate-90 ${
							isOpen && "opacity-[0]"
						}`}
					>
						Home
					</div>
				</div>
			</div>

			
			<div
				className={` ${
					isOpen && "active-link"
				} relative overflow-hidden w-[100vw] h-[calc(100vh-30px)] duration-500 pr-[80px] `}
			>
				<div
					className={` bg-[rgba(30,30,40,.88)] z-[9] absolute left-0 w-full h-full opacity-0 duration-500 ${
						isOpen && "opacity-70"
					}`}
				></div>

				<div
					style={{ backgroundImage: `url(${bg})` }}
					className='overflow-hidden absolute w-full h-[400px] top-0 bg-center bg-cover'
				>
					<div
						style={{
							backgroundImage: `linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)`,
						}}
						className='relative w-full h-full '
					></div>
				</div>
				<div className='text-white'>
					alskflsf
					<Outlet />
				</div>
			</div>
		</div>
	</div>
</div>; */}