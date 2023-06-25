"use client"
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    let Links = [
        { name: "หน้าแรก", link: "/" },
        { name: "ราชวงศ์จักรี", link: "/" },
        { name: "พระราชกรณียกิจ", link: "/" },
        { name: "ลงนามถวายพระพร", link: "/wellwishes" },
        { name: "แฟนพันธ์แท้พ่อหลวง", link: "/faenphantae" }
    ];
    let [open, setOpen] = useState<boolean>(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 flex lg:hidden z-20'>
            <div className="md:flex items-center justify-between bg-[url('/background.jpeg')] py-4 md:px-10 px-7 w-full">
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 text-blue-800'>
                    <span>We love our king</span>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer w-7 h-7'>
                    {
                        open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                    }
                </div>
                <ul className={`pb-12 absolute bg-[url('/background.jpeg')] z-20 left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li className='my-7 font-semibold' key={index}>
                                <Link href={link.link} className='text-blue-800 hover:text-blue-400 duration-500' onClick={() => setOpen(!open)}>{link.name}</Link>
                            </li>))
                    }
                    <button className='btn bg-blue-600 text-white font-semibold px-3 py-1 rounded duration-500'>Get Started</button>
                </ul>
            </div>
        </div>
    )
}

export default Header