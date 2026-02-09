"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import dynamic from "next/dynamic";
// const TinySlider = dynamic(() => import('tiny-slider-react'), {
// 	ssr: false
// });
import { expertiseData } from "../Data/data";
import CountUp from "react-countup";
import GitActivity from "./GitActivity";
import { FaCode, FaGithub } from 'react-icons/fa';


const settings = {
	controls: false,
	mouseDrag: true,
	loop: true,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayTimeout: 3000,
	navPosition: "bottom",
	speed: 500,
	gutter: 12,
	responsive: {
		992: {
			items: 6
		},
		767: {
			items: 3
		},
		320: {
			items: 1
		},
	},
};

export default function AboutUs() {
	const [mounted, setMounted] = useState(false);
    const sliderRef = useRef(null);
    const tnsRef = useRef(null);

	useEffect(() => {
		// Load CSS first
		import('tiny-slider/dist/tiny-slider.css')
			.then(() => {
				setMounted(true);
			})
			.catch(err => {
				console.error('AboutUs: Error loading TinySlider CSS:', err);
			});
	}, []);

    useEffect(() => {
        if (mounted && sliderRef.current && !tnsRef.current) {
            import('tiny-slider').then(module => {
                const tns = module.tns;
                tnsRef.current = tns({
                    container: sliderRef.current,
                    ...settings
                });
            });
        }
        
        return () => {
            if (tnsRef.current) {
                tnsRef.current.destroy();
                tnsRef.current = null;
            }
        };
    }, [mounted]);

	return (
		<section className="relative md:py-24 py-16" id="about">
			<div className="container">
				<div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
					<div className="lg:col-span-5 lg:px-8">
						<div className="relative">
							<div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
							<Image
								src="/images/basit-dev.jpg"
								alt=""
								height={0}
								width={0}
								sizes="100vw"
								style={{ height: "auto", width: "100%" }}
								className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800"
							/>

							<div className="absolute lg:bottom-20 md:bottom-10 bottom-7 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
								<h6 className="font-semibold">Fullstack Developer</h6>
								<span className="text-2xl font-medium text-amber-500 mb-0">
									<span className="counter-value font-bold" data-target="7">
										<CountUp
											start={1}
											className="counter-value"
											end={4}
											duration={2.75}
										/>
									</span>
									+
								</span>
								<span className="text-sm text-slate-400">
									Years <br /> Experience
								</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-7">
						<div className="lg:ms-5">
							<h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
								I am a Passionate Web Developer
							</h3>

							<p className="text-slate-400 max-w-xl text-[15px]">
								I am a Full-Stack Software Engineer with 4+ years of experience in web and mobile app development. I have worked on both remote and on-site projects using the Microsoft .NET ecosystem and modern cross-platform technologies.

I build secure and scalable applications using .NET MAUI, Flutter, ASP.NET Core, Ruby on Rails, React, Angular, and Node.js. My experience includes fintech and banking systems, SaaS platforms, e-commerce, and CMS/LMS projects. I focus on clean backend architecture, REST APIs, optimized databases, and responsive user interfaces. Open to remote and long-term collaboration							</p>

							<div className="mt-6">
								<Link
									href="#project"
									className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2"
								>
									See Work
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container md:mt-24 mt-16">
				<div className="mt-8">
					<div className="bg-gray-50 dark:bg-slate-800 py-2 rounded-md">
						<h3 className="mt-4 mb-6 ms-8 md:text-2xl text-xl font-semibold">
							<FaCode className="inline-block mr-2" />
              Technical skills & Expertise
            </h3>

						<div className="px-4 pb-4">
							{mounted && (
								<div className="tiny-slider" ref={sliderRef}>
									{expertiseData.map((item, index) => {
										const Icon = item.Icon;
										return (
											<div key={index}>
												<div className="grid items-center justify-center">
													<div className="flex items-center justify-center h-[45px] w-12 -rotate-45 bg-amber-500/10 text-amber-500 rounded-xl my-2 mx-auto">
														<div className="rotate-45">
															<Icon className="h-5 w-5" />
														</div>
													</div>
													<div className="text-center mt-1">
														<h4 className="text-[17px] font-medium">
															{item.title}
														</h4>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>


			<div className="container md:mt-24 mt-16">
				<div className="mt-8">
					<div className="tiny-three-item bg-gray-50 dark:bg-slate-800 py-2 rounded-md">
						<h3 className="mt-4 mb-6 ms-8 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
							<FaGithub className="inline-block mr-2" /> GitHub Activity
						</h3>
						<div className="ms-8">
							<GitActivity />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
