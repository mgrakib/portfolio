/** @format */
import { IoMenu } from "react-icons/io5";

import { Outlet } from "react-router-dom";
import "./App.css";
import SidBar from "./components/SidBar/SidBar";

import bg from "./assets/img/bg.jpg";

import img from './assets/img/face-2.png'
import { useState } from "react";


import './App.css'

function App() {
  const [isOpen , setIsOpen ]= useState(false)
	return (
		<div className='p-[15px] w-[100vw] h-[100vh] relative overflow-hidden'>
			<div className='max-w-[1440px] mx-auto bg-cover w-full h-full relative overflow-hidden shadow-[0_3px_8px_0_rgba(15,15,20,.2)]'>
				<div className='flex flex-nowrap relative '>
					<SidBar />

					{/* nav bar  */}
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
								<span className='px-[30px]'>
									<IoMenu
										onClick={() => setIsOpen(!isOpen)}
										className='cursor-pointer text-white text-2xl '
									/>
								</span>
							</div>

							<div
								className={` w-[200px] text-[#fafafc] absolute  overflow-hidden top-[200px] text-[13px] font-[500] -left-[62px] opacity-100 leading-3 duration-500 rotate-90 ${
									isOpen && "opacity-[0]"}`}
							>
								Home
							</div>
						</div>
					</div>

					{/* main contente  */}
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

						<div className='opacity-100'>
							<div className='overflow-hidden outline-none py-5 w-full h-[calc(100vh-30px)]'>
								<div
									style={{
										transform: `translate3d(0px, 0px, 0px)`,
									}}
								>
									<div>
										<section>
											<div className='flex mx-auto relative'>
												<div className='w-full relative min-h-[1px] flex'>
													<div className='flex flex-wrap w-full relative items-start'>
														<div className='w-full'>
															<div className='overflow-hidden relative px-[30px]'>
																<div className='pt-[30px] flex flex-wrap -mx-[15]'>
																	<div
																		style={{
																			flex: `0 0 100%`,
																		}}
																		className='max-w-full'
																	>
																		<div
																			style={{
																				backgroundImage: `url(${bg})`,
																			}}
																			className='scale-100 opacity-100 bg-cover bg-center relative shadow-[0_3px_8px_0_rgba(15,15,20,.2)] z-[99] mb-[30px]'
																		>
																			<div
																				style={{
																					backgroundImage: `linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)`,
																				}}
																				className='relative flex p-[60px] w-full '
																			>
																				<div>
																					<h1 className='text-[42px] text-[#fff] font-bold mb-[15px]'>
																						<span>
																							Discover
																							my
																							Amazing
																							<br />
																							Art
																							Space!
																						</span>
																					</h1>

																					<div className='text-[#fafafc] mb-[25px]'>
																						{`<cide> I build ios and android application </code> `}
																					</div>

																					<div>
																						<a
																							href=''
																							className='text-[12px] h-[45px] px-[35px] bg-brand-color  text-[#20202a] inline-flex justify-center font-[600] items-center'
																						>
																							EXPLORE
																							NOW
																						</a>
																					</div>

																					<img
																						src={
																							img
																						}
																						alt=''
																						className='w-[360px] absolute right-[30px] bottom-0'
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
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
