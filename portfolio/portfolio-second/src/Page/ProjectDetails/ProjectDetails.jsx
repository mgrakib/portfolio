/** @format */

import SmoothScrollTwo from "../../components/SmoothScroll/SmoothScrollTwo";
import "./ProjectDetails.css";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import bg from "../../assets/img/bg.jpg";

import rupa from "../../assets/img/rupa.jpg";
import Rating from "react-rating";

const ProjectDetails = () => {
	const { projectDisplay, setProjectDisplay } = useAuth();

	const id = useParams();
	const [project, setProject] = useState('');

	useEffect(() => {
		setProjectDisplay(id);

		fetch("../project.json")
			.then(res => res.json())
			.then(data => {
                const project = data.find(item => item.id === id.id);
				setProject(project);
			});
    }, [id, setProjectDisplay]);
    
    // console.log(project?.clientReviews.length);

	return (
		<>
			<SmoothScrollTwo />
			<div
				id='main-content'
				className=' mb-[30px] w-full h-full'
			>
				<h3 className='text-[17px] font-[600] pb-[30px] text-white-color'>
					{project?.name}
				</h3>

				<div
					className={`grid gap-8 mb-[30px] ${
						project?.projectImages?.photoShowCase?.length > 1
							? "grid-cols-2"
							: "grid-cols-1"
					}`}
				>
					{project?.projectImages?.photoShowCase.map((img, i) => {
						console.log(img);
						return (
							<div
								key={i}
								style={{ backgroundImage: `url(${img})` }}
								className=' w-full h-[300px] bg-top bg-cover hover:bg-bottom duration-[3000ms]'
							></div>
						);
					})}
				</div>

				<SectionTitle title={"Project details"} />

				<div className='grid grid-cols-3 gap-5 mb-[30px]'>
					<div className='col-span-2 gradiant-bg p-[30px]'>
						<h5 className='mb-[15px]'>Description</h5>
						<p className='text-[12px] leading-[16px] mb-[15px] text-gray-color'>
							{project?.description}
						</p>
					</div>
					<div className='col-span-1 gradiant-bg p-[30px]'>
						<div className='flex items-center justify-between mb-[5px]'>
							<h5>Order Date:</h5>
							<span className='text-gray-color'>
								{project?.projectInfo?.orderDate}
							</span>
						</div>
						<div className='flex items-center justify-between mb-[5px]'>
							<h5>Final Date:</h5>
							<span className='text-gray-color'>
								{project?.projectInfo?.finalDate}
							</span>
						</div>
						<div className='flex items-center justify-between mb-[5px]'>
							<h5>Status:</h5>
							<span className='text-gray-color'>
								{project?.projectInfo?.status}
							</span>
						</div>
					</div>
				</div>

				<SectionTitle title={"Client reviews"} />

				<div
					className={`grid gap-8 mb-[30px] ${
						project?.clientReviews?.length > 1
							? "md:grid-cols-2"
							: "md:grid-cols-1"
					}`}
				>
					{project?.clientReviews?.map((review, i) => {
						return (
							<div
								key={i}
								className='p-[30px] gradiant-bg relative'
							>
								<div>
									<h6>{review.clientName}</h6>
									<p className='mt-[5px] mb-[15px] text-gray-color'>
										<i>{review.clientDesignation}</i>
									</p>

									<div>
										<p className='text-gray-color mb-[16px]'>
											{review.review}
										</p>
									</div>

									<div className='bg-primary-bg-color text-brand-color  py-[5px] px-[15px] rounded-full inline-block'>
										<div className=' flex items-center justify-start gap-1 text-[12px] '>
											{/* <FaStar />
												
												<FaStar />
												<FaStar />
												<FaStar /> */}
											<Rating
												readonly
												placeholderRating={
													review.rating
												}
												emptySymbol={<FaRegStar />}
												placeholderSymbol={<FaStar />}
												fullSymbol={<FaStar />}
											/>
										</div>
									</div>
								</div>

								<div className='w-[50px] h-[50px]  rounded-full absolute -top-5 right-5 overflow-hidden '>
									<img
										src={rupa}
										alt=''
										className='w-full h-full object-cover'
									/>
								</div>
							</div>
						);
					})}
				</div>

				<div
					style={{ backgroundImage: `url(${bg})` }}
					className=' bg-cover bg-center bg-no-repeat mb-[30px]'
				>
					<div
						style={{
							backgroundImage: `linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)`,
						}}
						className='px-[20px] py-[60px] md:p-[60px] relative w-full h-full text-center '
					>
						<h1 className='text-white-color mb-[15px] '>
							Ready to order your project?
						</h1>

						<div className='mb-[16px] font-[400]  text-white-color font-secondary-font tracking-[.25px]'>
							Let's work together!
						</div>

						<div>
							<a
								href=''
								className='text-[12px] font-[600] h-[45px] bg-brand-color px-[35px] inline-flex  items-center uppercase'
							>
								CONTACT ME
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetails;
