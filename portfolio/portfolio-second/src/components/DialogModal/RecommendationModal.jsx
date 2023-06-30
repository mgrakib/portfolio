/** @format */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthPorvider";
import { FaStar } from "react-icons/fa";
import rupa from "../../assets/img/rupa.jpg";

const RecommendationModal = () => {
	const { isOpenModal, setIsOpenModal } = useContext(AuthContext);

	function closeModal() {
		setIsOpenModal(false);
	}

	return (
		<div className='absolute'>
			<Transition
				appear
				show={isOpenModal}
				as={Fragment}
			>
				<Dialog
					as='div'
					className='relative z-[999]'
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-75' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-xl transform     text-left align-middle shadow-xl transition-all'>
									<div className='p-[30px] gradiant-bg relative '>
										<div>
											<h6>RUPA</h6>
											<p className='mt-[5px] mb-[15px] text-gray-color'>
												<i>Template author</i>
											</p>

											<div>
												<p className='text-gray-color mb-[16px]'>
													Working with Artur has been
													a pleasure. Better yet - I
													alerted them of a minor
													issue before going to sleep.
													The issue was fixed the next
													morning. I couldn't ask for
													better support. Thank you
													Artur! This is easily a 5
													star freelancer.
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
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default RecommendationModal;
