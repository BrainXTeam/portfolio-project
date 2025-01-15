"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";
export default function Footer() {
	return (
		<footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
			<div className="py-[30px] px-0 border-t border-slate-800">
				<div className="container text-center">
					<div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
						<div className="lg:col-span-3 md:text-start text-center">
							<Link href="#" className="text-[22px] focus:outline-none">
								<Image
									src="/images/logo-light.png"
									width={96}
									height={20}
									className="mx-auto md:me-auto md:ms-0"
									alt=""
								/>
							</Link>
						</div>

						<div className="lg:col-span-5 text-center mt-6 md:mt-0">
							<p className="mb-0">
								Copyright © {new Date().getFullYear()} basitkhandev. All Rights
								Reserved.
							</p>
						</div>

						<ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
							<li className="inline">
								{" "}
								<Link
									href="https://www.linkedin.com/in/abdul-basit-khan-dev"
									target="_blank"
									className="btn btn-icon btn-sm border rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
								>
									<Unicons.UilLinkedin width={16} />
									<i className="uil uil-linkedin" title="Linkedin"></i>
								</Link>
							</li>
							<li className="inline">
								<Link
									href="https://github.com/abdulbasitkhandeveloper"
									target="_blank"
									className="btn btn-icon btn-sm border rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
								>
									<Unicons.UilGithub width={16} />
									<i className="uil uil-linkedin" title="Linkedin"></i>
								</Link>
							</li>
							<li className="inline">
								{" "}
								<Link
									href="https://www.upwork.com/freelancers/~01990c34817caff32c"
									target="_blank"
									className="btn btn-icon btn-sm border rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
								>
									<Image
										src="/images/logos/upwork.svg"
										alt="Upwork"
										width={16}
										height={16}
									/>
								</Link>
							</li>
							<li className="inline">
								<Link
									href="https://www.fiverr.com/s/o8A5DwV"
									target="_blank"
									className="btn btn-icon btn-sm border rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
								>
									<Image
										src="/images/logos/icons8-fiverr.svg"
										alt="Upwork"
										width={22}
										height={22}
									/>
								</Link>
							</li>
							<li className="inline">
								<Link
									href="mailto:basitkhanbasit640@gmail.com"
									className="btn btn-icon btn-sm border rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
								>
									<Unicons.UilEnvelope width={16} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
