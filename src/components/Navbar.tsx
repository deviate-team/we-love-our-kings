import React, { Fragment, useState } from 'react';

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {

    const [navbarClick, setNavbarClick] = useState<boolean>(true);

    const handleNavbar = (): void => {
        setNavbarClick(!navbarClick);
    }

    return (
        <Fragment>
            <nav className="absolute top-30 z-50 w-full border-b border-gray-200 bg-[url('/background.jpeg')]">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button type="button" className="inline-flex items-center p-2 text-sm text-blue-800" onClick={handleNavbar}>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex items-center ml-3">
                                <ul className="flex p-4 md:p-0 mt-4 font-medium borderrounded-lg flex-row space-x-14 md:mt-0 border-0">
                                    <li>
                                        <a href="/" className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight">หน้าแรก</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight">ราชวงศ์จักรี</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight">พระราชกรณียกิจ</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight">พระราชดำรัส</a>
                                    </li>
                                    <li>
                                        <a href="/faenphantae" className="block py-2 pl-3 pr-4 text-blue-800 rounded text-xl font-extralight">แฟนพันธ์แท้พ่อหลวง</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center" />
                    </div>
                </div>
            </nav>

            <aside className={`absolute left-0 z-40 w-64 h-screen pt-20 pb-10 transition-transform bg-[url('/background.jpeg')] border-r border-gray-200  ${navbarClick ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="px-3 pb-96 overflow-y-auto bg-[url('/background.jpeg')]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="/" className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base mb-10">
                                <span>ข่าวสารและกิจกรรม</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base">
                                <span>มัลติมิเดีย</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">อัลบั้มภาพ</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">ภาพยนตร์เฉลิมพระเกียรติ์</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">วิดิโอ</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">บทเพลงเฉลิมพระเกียรติ</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base">
                                <span>เนื้อหาที่น่าสนใจ</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">พระราชประวัติ ร.๑๐</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">การสวรรคตของ ร.๙</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">พระเมรุมาศ ร.๙</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">พระบรมมหาราชวัง</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base">
                                <span>ท่องเที่ยวเชิงการศึกษา</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">โครงการชั่งหัวมัน</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">ศูนย์ภูมิรักษ์ธรรมชาติ</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-800">
                                    <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">พระตำหนักจิตรลดารโหฐาน</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className={`${navbarClick && 'ml-64'} mt-10`}>
                {children}
            </div>
        </Fragment>
    )
}

export default Navbar