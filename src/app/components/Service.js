"use client";
import React, { useState } from "react"; // Import useState
import Link from "next/link";
import { servicesData } from "../Data/data";

export default function Services() {
	return (
		<section
			className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
			id="service"
		>
			<div className="container">
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
						Services I Offer
					</h3>
				</div>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
					{servicesData.map((item, index) => {
						const imageSrc = item.image;
						const [isExpanded, setIsExpanded] = useState(false);

						const toggleDescription = () => {
							setIsExpanded(!isExpanded);
						};

						return (
							<div
								className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
								key={index}
							>
								<img src={imageSrc} alt={item.title} className="h-48 object-cover w-full" />

								<div className="content mt-7">
									<Link
										href=""
										className="title h5 text-[17px] font-medium hover:text-amber-500"
									>
										{item.title}
									</Link>
									<p className="text-slate-400 mt-3 text-[15px]">
										{isExpanded ? item.desc : `${item.desc.substring(0, 70)}...`}
									</p>
									<button 
										onClick={toggleDescription} 
										className="text-amber-500 mt-2"
									>
										{isExpanded ? 'Read Less' : 'Read More'}
									</button>
									<p className="text-slate-500 mt-3 text-[15px]">
										{item.desc2}
									</p>
									<p className="text-slate-400 mt-3 text-[15px]">
										{item.desc3}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}