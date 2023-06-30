/** @format */

import "./HeroBannar.css";
import bg from "../../assets/img/bg.jpg";
import img from "../../assets/img/face-2.png";

import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const HeroBannar = () => {
	return (
		<div
			style={{ backgroundImage: `url(${bg})` }}
			className=' bg-cover bg-center bg-no-repeat mb-[30px]'
		>
			<div
				style={{
					backgroundImage: `linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)`,
				}}
				className='p-[60px] relative w-full h-full'
			>
				<h1 className='text-white-color mb-[15px]'>
					<span>
						Discover my Amazing <br /> Art Space!
					</span>
				</h1>

				<div className='mb-[25px] text-white-color'>
					{"<"}
					<i className='text-brand-color'>code</i>
					{">"} I build,{" "}
					<span>
						<Typewriter
							words={[
								"design mockups.",
								"automation tools.",
								"web interfaces.",
								"ios and android applications.",
							]}
							// typeSpeed={40}
							cursor
							typeSpeed={100}
							deleteSpeed={20}
							loop
						/>
					</span>{" "}
					{"</"}
					<i className='text-brand-color'>code</i>
					{">"}
				</div>

				<div>
					<a
						href=''
						className='text-[12px] font-[600] h-[45px] bg-brand-color px-[35px] inline-flex  items-center'
					>
						EXPLORE NOW
					</a>
				</div>

				<img
					src={img}
					alt=''
					className='absolute w-[390px] right-[62px] bottom-0'
				/>
			</div>
		</div>
	);
};

export default HeroBannar;
