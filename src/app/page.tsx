"use client"
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { CARD } from "@/constants/card";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
      <Banner />
      <Navbar>
        <div className="container my-12 mx-auto px-4 md:px-12 mt-20">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/1/19
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <Image alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p className="ml-2 text-sm">
                      Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>

              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/1/19
                  </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <Image alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p className="ml-2 text-sm">
                      Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/1/19
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <Image alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p className="ml-2 text-sm">
                      Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/1/19
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <Image alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p className="ml-2 text-sm">
                      Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/1/19
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <Image alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p className="ml-2 text-sm">
                      Author Name
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </Navbar>
    </Fragment >
  )
}
