"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import "../../../node_modules/react-18-image-lightbox/style.css";
import Image from "next/image";
import { project } from "../Data/data";

export default function Projects() {
	const [photoIndex, setActiveIndex] = useState(0);
	const [isOpen, setOpen] = useState(false);

	const handleCLick = (index) => {
		setActiveIndex(index);
		setOpen(!isOpen);
	};

	return (
		<section className="relative md:py-24 py-16" id="project">
			<div className="container">
				<div className="grid grid-cols-1 pb-8 text-center">
					<p className="text-slate-400 max-w-xl mx-auto text-[15px]">
						(projects)
					</p>
					<h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
						Featured Work
					</h3>
				</div>

				<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
					{project.length > 0 &&
						project.map((pro, index) => {
							return (
								<div
									key={index}
									className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800"
								>
									<div className="relative w-full h-56 md:h-48 lg:h-64">
										<Image
											src={pro.image}
											alt={pro.title}
											fill
											className="object-cover"
										/>
									</div>
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
									<div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
										<Link
											href="#!"
											className="text-white hover:text-amber-500 font-semibold transition-all duration-500"
										>
											{pro.title}
										</Link>
										<span className="block text-sm text-slate-400">
											{pro.subTitle}
										</span>
									</div>

									<div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
										<Link
											href={pro.link}
											className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
											target="_blank"
										>
											<Unicons.UilLink width={16} />
										</Link>
									</div>
								</div>
							);
							})}
				</div>
			</div>
		</section>
	);
}
