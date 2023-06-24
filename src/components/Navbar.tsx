import React, { Fragment, useState } from "react";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <Fragment>
            <nav className="w-full bg-[url('/background.jpeg')]">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-blue-800"
                                onClick={toggleSidebar}
                            >
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex items-center ml-3">
                                <ul className="flex p-4 md:p-0 mt-4 font-medium borderrounded-lg flex-row space-x-14 md:mt-0 border-0">
                                    <li>
                                        <a
                                            href="/"
                                            className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                                        >
                                            หน้าแรก
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                                        >
                                            ราชวงศ์จักรี
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                                        >
                                            พระราชกรณียกิจ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                                        >
                                            พระราชดำรัส
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/faenphantae"
                                            className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                                        >
                                            แฟนพันธ์แท้พ่อหลวง
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center" />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
