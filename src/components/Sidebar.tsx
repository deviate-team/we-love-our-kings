import { Fragment } from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Fragment>
      <aside
        className={`w-64 transition-transform border-r border-gray-200 bg-[url('/background.jpeg')] bg-repeat`}
      >
        <div className="px-3 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base mb-10"
              >
                <span>ข่าวสารและกิจกรรม</span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base"
              >
                <span>มัลติมิเดีย</span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  อัลบั้มภาพ
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  ภาพยนตร์เฉลิมพระเกียรติ์
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  วิดิโอ
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg mb-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  บทเพลงเฉลิมพระเกียรติ
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base"
              >
                <span>เนื้อหาที่น่าสนใจ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  พระราชประวัติ ร.๑๐
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  การสวรรคตของ ร.๙
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  พระเมรุมาศ ร.๙
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg mb-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  พระบรมมหาราชวัง
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-blue-800 rounded-lg font-medium text-base"
              >
                <span>ท่องเที่ยวเชิงการศึกษา</span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  โครงการชั่งหัวมัน
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  ศูนย์ภูมิรักษ์ธรรมชาติ
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/forbidden"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap text-blue-800 font-light">
                  พระตำหนักจิตรลดารโหฐาน
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
}
