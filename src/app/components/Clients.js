'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const TinySlider = dynamic(() => import('tiny-slider-react'),{ ssr: false });
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';

import { review } from "../Data/data";

const settings = {
    lazyload: true,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}
export default function Clients(){
   
    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Clients Review</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="grid relative grid-cols-1 mt-8">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {
                                review.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                           
                                        <div className="customer-testi">
                                            <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                                <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                                                <p className="text-slate-400 text-[15px]">{item.desc}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-3">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                            
                                            <div className="text-center mt-5">
                                                <Image src={item.image} height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}} className="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                                                <Link href="" className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">{item.name}</Link>
                                                <span className="text-slate-400 text-sm block">{item.designation}</span>
                                            </div>
                                        </div>
                                    
                                    </div>
                                ))
                            }
                        </TinySlider>

                    </div>
                </div>
            </div>
        </section>
    )
}