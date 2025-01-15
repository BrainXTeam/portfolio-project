'use client'
import React from "react";
import Link from "next/link";
export default function AddBanner(){
    return(
        <section className="py-20 w-full table relative bg-[url('/images/bg/bg2.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">I Am Available for Freelancing </h3>

                    <p className="text-white/80 max-w-xl mx-auto text-[15px]">You can contact me on these platforms 24/7</p>
                
                    <div className="relative mt-8">
                        <Link href="https://www.upwork.com/freelancers/~01990c34817caff32c" target="_blank" className="btn bg-[#6FDA44] hover:bg-[#5BBF3A] border-[#6FDA44] hover:border-[#5BBF3A] text-white rounded-md mx-2">Hire on Upwork</Link>
                        <Link href="https://www.fiverr.com/s/o8A5DwV" target="_blank" className="btn bg-[#1DBF73] hover:bg-[#1AAE63] border-[#1DBF73] hover:border-[#1AAE63] text-white rounded-md">Hire on Fiverr</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}