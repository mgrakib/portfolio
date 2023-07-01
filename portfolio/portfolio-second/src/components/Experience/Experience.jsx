/** @format */

import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

const Experience = () => {
	
	return (
		<div className='mb-[30px]'>
			<div className='flex items-center justify-between flex-wrap'>
				<div className='flex items-center gap-2 md:gap-3 w-1/2 md:w-1/4'>
					<h4 className='text-brand-color w-1/4 flex items-center gap-1'>
						<AnimatedNumbers
							animateToNumber={10}
							fontStyle={{ fontSize: 22 }}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						></AnimatedNumbers>{" "}
						+
					</h4>
					<h6 className='flex-1'>Years Experience</h6>
				</div>
				<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
					<h4 className='text-brand-color w-1/4'>
						<AnimatedNumbers
							includeComma
							animateToNumber={143}
							fontStyle={{ fontSize: 22 }}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						></AnimatedNumbers>
					</h4>
					<h6 className='flex-1'>Completed Projects</h6>
				</div>
				<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
					<h4 className='text-brand-color w-1/4'>
						<AnimatedNumbers
							includeComma
							animateToNumber={114}
							fontStyle={{ fontSize: 22 }}
							configs={[
								{ mass: 1, tension: 220, friction: 100 },
								{ mass: 1, tension: 180, friction: 130 },
								{ mass: 1, tension: 280, friction: 90 },
								{ mass: 1, tension: 180, friction: 135 },
								{ mass: 1, tension: 260, friction: 100 },
								{ mass: 1, tension: 210, friction: 180 },
							]}
						></AnimatedNumbers>
					</h4>
					<h6 className='flex-1'>Happy Customers</h6>
				</div>
				<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
					<h4 className='text-brand-color w-1/4 flex items-center gap-1'>
						<AnimatedNumbers
							animateToNumber={10}
							fontStyle={{ fontSize: 22 }}
							configs={(number, index) => {
								return {
									mass: 1,
									tension: 230 * (index + 1),
									friction: 140,
								};
							}}
						></AnimatedNumbers>{" "}
						+
					</h4>
					<h6 className='flex-1'>Honors and Awards</h6>
				</div>
			</div>
		</div>
	);
};

export default Experience;
