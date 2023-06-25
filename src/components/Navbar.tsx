import Link from "next/link";
import React, { Fragment } from "react";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
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
                    <Link
                      href="/"
                      className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                    >
                      หน้าแรก
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                    >
                      ราชวงศ์จักรี
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                    >
                      พระราชกรณียกิจ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wellwishes"
                      className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                    >
                      ลงนามถวายพระพร
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faenphantae"
                      className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight hover:underline"
                    >
                      แฟนพันธ์แท้พ่อหลวง
                    </Link>
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
}
