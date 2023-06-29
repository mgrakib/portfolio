/** @format */

import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthPorvider";
import bg from "../../assets/img/bg.jpg";

import img from "../../assets/img/face-2.png";
const Home = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext);
	return (
		<div>
			
				

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

		
	);
};

export default Home;
