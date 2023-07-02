/** @format */

import "./HeroBannar.css";
import bg from "../../assets/img/bg.jpg";
import img from "../../assets/img/face-2.png";

import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HeroBannar = () => {
	const handleDownload = () => {
		window.open(
			`https://drive.google.com/uc?id=1brHFER43Kig2JtJQIZs5po4rR5HiQnNk&export=download`
		);
	};

	return (
		<div
			data-aos='zoom-in'
			data-aos-offset='0'
			data-aos-duration='1000'
		>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className=' bg-cover bg-center bg-no-repeat mb-[30px]'
			>
				<div
					style={{
						backgroundImage: `linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)`,
					}}
					className='px-[20px] py-[60px] md:p-[60px] relative w-full h-full text-center md:text-start'
				>
					<h1 className='text-white-color mb-[15px] '>
						Discover my Amazing <br /> Art Space!
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
						<button
							onClick={handleDownload}
							className='text-[12px] font-[600] h-[45px] bg-brand-color px-[35px] inline-flex  items-center'
						>
							Download Resume
						</button>
					</div>

					<img
						src={img}
						alt=''
						className='invisible md:visible absolute w-[390px] right-[0px] bottom-0'
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroBannar;
