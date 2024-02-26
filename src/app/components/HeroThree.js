'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function HeroThree(){
    return(
        <section className="relative table w-full lg:py-60 py-36 bg-[url('/images/bg/bg3.jpg')] bg-no-repeat bg-center bg-cover" id="home">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container">
                <div className="grid grid-cols-1 text-center mt-5 relative">
                    <Image width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} src="/images/hero/4.jpg" className="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".1s" alt=""/>
                    <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal text-white my-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Dennis Scott</h4>
                    <p className="text-white/50 max-w-xl mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>

                    <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                        <Link href="" className="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white" type="submit">Hire me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}