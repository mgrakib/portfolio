/** @format */

import "./MyServices.css";

import { BiChevronRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SectionTitle from "../SectionTitle/SectionTitle";
// ..
AOS.init();
const MyServices = () => {
	return (
		<div className='mb-[30px]'>
			<SectionTitle title={"My Services"} />

			<div className='grid md:grid-cols-3 gap-5'>
				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>

				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>

				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>

				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>

				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>

				<div className='shadow-[0_3px_8px_0_rgba(15,15,20,.2)] gradiant-bg'>
					<div className='p-[30px]'>
						<h6 className='text-white mb-[15px]'>
							Web Development
						</h6>
						<p className='mb-[16px] text-gray-color'>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Delectus esse commodi deserunt vitae, vero
							quasi! Veniam quaerat tenetur pariatur doloribus.
						</p>

						<button className='text-brand-color font-[600] flex items-center group'>
							ORDER NOW{" "}
							<span className='group-hover:ml-1 duration-700'>
								<BiChevronRight />{" "}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyServices;
