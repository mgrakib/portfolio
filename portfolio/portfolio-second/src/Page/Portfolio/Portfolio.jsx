/** @format */

import useAuth from "../../hooks/useAuth";
import work1 from "../../assets/project/work-1.jpg";
import { BiChevronRight } from "react-icons/bi";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SmoothScrollTwo from "../../components/SmoothScroll/SmoothScrollTwo";
import { useEffect, useState } from "react";
import { IoEllipseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// ..
AOS.init();
const Portfolio = () => {
	const { colmun,  setProjectDisplay } = useAuth();
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("project.json")
			.then(res => res.json())
			.then(data => setProjects(data));
	},[])


	return (
		<>
			<SmoothScrollTwo />
			<div
				id='main-content'
				className=' mb-[30px] w-full h-full'
			>
				<h3 className='text-[17px] font-[600] pb-[30px] text-white-color  '>
					Portfolio
				</h3>

				<div className={`grid md:grid-cols-${colmun} gap-8`}>
					{projects.map(project => {
						const words = project.description.split(" ");
						let truncatedDescription;
						if (words.length > 10) {
							truncatedDescription =
								words.slice(0, 10).join(" ") + "...";
						} else {
							truncatedDescription = project.description;
							
						}
						// console.log(project?.projectImages?.displayImage);
					
						return (
							<div
								key={project.id}
								className='gradiant-bg overflow-hidden relative group'
							>
								<div className='overflow-hidden'>
									<img
										src={
											project?.projectImages?.displayImage
												? project?.projectImages
														?.displayImage
												: "https://i.ibb.co/zSCycmy/image.png"
										}
										alt=''
										className='h-[250px] w-full object-cover'
									/>
								</div>
								<div
									style={{
										backgroundImage: `linear-gradient(159deg,rgba(45,45,58,.98) 0%,rgba(43,43,53,.98) 100%)`,
									}}
									className='p-[20px]   absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 duration-500  w-full '
								>
									<h5 className='mb-[15px]'>
										{project.name}
									</h5>
									{colmun === 2 && (
										<div className='text-gray-color text-[12px] mb-[15px] '>
											{truncatedDescription}
										</div>
									)}

									<Link
										onClick={() => setProjectDisplay(project.id)}
										to={`/project-details/${project.id}`}
									>
										<button className='text-brand-color font-[600] flex items-center group'>
											Show Details{" "}
											<span className='group-hover:ml-1 duration-700'>
												<BiChevronRight />{" "}
											</span>
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Portfolio;
