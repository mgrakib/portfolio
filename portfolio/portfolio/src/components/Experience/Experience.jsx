import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Experience.css'
import { FaReact } from "react-icons/fa";
import html from "../../assets/icons/html.png";
import css from '../../assets/icons/css.png'
import js from "../../assets/icons/js.png";
import node from "../../assets/icons/node.png";
import mongodb from "../../assets/icons/mongodb.png";

const Experience = () => {
    return (
		<div
			id='experience'
			className='w-full  pt-28'
		>
			<Container>
				<SectionTitle
					title='WHY CHOOSE ME'
					subtitle='My Expertise Area​'
				/>

				<div>
					<div className='grid grid-cols-3 gap-y-[50px] gap-x-[20px]'>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[48px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2'>
									<img
										src={html}
										alt=''
										className='w-[58px]'
									/>
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px] text-center'>
									HTML
								</p>
							</div>
						</div>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[48px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2 '>
									<img
										src={css}
										alt=''
										className='w-[58px]'
									/>
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px]  text-center'>
									CSS
								</p>
							</div>
						</div>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[48px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2 '>
									<img
										src={js}
										alt=''
										className='w-[58px]'
									/>
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px]  text-center'>
									JavaScript
								</p>
							</div>
						</div>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[58px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2 '>
									<FaReact />
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px]'>
									React
								</p>
							</div>
						</div>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[48px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2 '>
									<img
										src={node}
										alt=''
										className='h-[80px]'
									/>
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px]  text-center'>
									Node.js
								</p>
							</div>
						</div>
						<div className=' py-[40px] p-[30px] flex items-center justify-center border border-gray-200 rounded-lg bg-white shadow-[0px_0px_30px_2px_rgba(0,0,0,.05)] '>
							<div>
								<div className='text-[48px] text-[#5ED3F3] font-bold flex justify-center text-center mb-[25px] p-2 '>
									<img
										src={mongodb}
										alt=''
										className='h-[80px]'
									/>
								</div>
								<p className='text-[20px] font-[800] uppercase mb-[10px]  text-center'>
									MongoDB
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Experience;