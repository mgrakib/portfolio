/** @format */

import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import "./FeedBack.css";
import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import feedback from '../../../public/feedback.json'

import client1 from '../client/client1.jpg'
import client2 from '../client/client2.jpg'
import client3 from '../client/client3.jpg'
import client4 from '../client/client4.jpg'
import client5 from '../client/client5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Rating from "react-rating";
const FeedBack = () => {
    console.log(feedback);
	return (
		<div
			id='feedback'
			className='w-full  pt-28'
		>
			<Container>
				<div className='mb-5'>
					<SectionTitle
						title='BEST FEEDBACK EXAMPLES'
						subtitle='Awesome Clients'
					/>
				</div>

				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					navigation={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					modules={[Navigation, Autoplay]}
					className='mySwiper'
				>
					{feedback.map(singleFeedback => (
						<SwiperSlide key={singleFeedback.id}>
							<div className='border rounded-md px-[30px] py-[40px] relative overflow-hidden'>
								<div>
									<div className='mb-5'>
										<div className='w-[70px] h-[70px] rounded-full overflow-hidden mx-auto'>
											<img
												src={singleFeedback.image}
												alt=''
											/>
										</div>
									</div>

									<div className='mb-[15px]'>
										<h4 className='text-[18px] font-[600]'>
											{singleFeedback.name}
										</h4>
										<p className='text-[14px] font-[400] text-[#7F7F7F]'>
											{singleFeedback.countery}
										</p>
									</div>
									<div className='mb-5'>
										<Rating
											readonly
											placeholderRating={
												singleFeedback.ratting
											}
											emptySymbol={
												<FaRegStar className='text-[#F1CC51]' />
											}
											placeholderSymbol={
												<FaStar className='text-[#F1CC51]' />
											}
											fullSymbol={
												<FaStar className='text-[#F1CC51]' />
											}
										/>
									</div>

									<div>
										<p className='mb-[30px] text-[14px] text-[#565656] leading-[18px]'>
											{singleFeedback.feedback}
										</p>
									</div>
								</div>

								<div className='absolute w-[160px] h-[160px] bg-secondary-color -top-[25%] -right-[25%] rounded-full '>
									<div className='text-white  w-full h-full relative'>
										<span className="absolute bottom-9 left-9 text-[14px]" >
											<FaQuoteRight />
										</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
};

export default FeedBack;
