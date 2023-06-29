import { FaStar } from "react-icons/fa";

import rupa from '../../assets/img/rupa.jpg'
const Feedback = () => {
    return (
		<div className='mb-[30px]'>
			<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
				Recommendations
			</h3>

			<div className='grid grid-cols-2 gap-5'>
				<div className='p-[30px] gradiant-bg relative'>
					<div>
						<h6>RUPA</h6>
						<p className='mt-[5px] mb-[15px] text-gray-color'>
							<i>Template author</i>
						</p>

						<div>
							<p className='text-gray-color mb-[16px]'>
								Working with Artur has been a pleasure. Better
								yet - I alerted them of a minor issue before
								going to sleep. The issue was fixed the next
								morning. I couldn't ask for better support.
								Thank you Artur! This is easily a 5 star
								freelancer.
							</p>
						</div>

						<div className='bg-primary-bg-color text-brand-color  py-[5px] px-[15px] rounded-full inline-block'>
							<div className=' flex items-center justify-start gap-1 text-[12px] '>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
					</div>

					<div className='w-[50px] h-[50px]  rounded-full absolute -top-5 right-5 overflow-hidden '>
						<img
							src={rupa}
                            alt=''
                            className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className='p-[30px] gradiant-bg relative'>
					<div>
						<h6>RUPA</h6>
						<p className='mt-[5px] mb-[15px] text-gray-color'>
							<i>Template author</i>
						</p>

						<div>
							<p className='text-gray-color mb-[16px]'>
								Working with Artur has been a pleasure. Better
								yet - I alerted them of a minor issue before
								going to sleep. The issue was fixed the next
								morning. I couldn't ask for better support.
								Thank you Artur! This is easily a 5 star
								freelancer.
							</p>
						</div>

						<div className='bg-primary-bg-color text-brand-color  py-[5px] px-[15px] rounded-full inline-block'>
							<div className=' flex items-center justify-start gap-1 text-[12px] '>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
					</div>

					<div className='w-[50px] h-[50px]  rounded-full absolute -top-5 right-5 overflow-hidden '>
						<img
							src={rupa}
                            alt=''
                            className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;