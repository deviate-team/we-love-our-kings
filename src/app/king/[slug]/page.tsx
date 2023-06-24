"use client"

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { CARD } from "@/constants/card";
import toThaiSlug from "@/hooks/encodeThaiString";
import { ICard } from "@/interfaces/card";
import { Fragment } from "react";

interface PageProps {
    params: {
        slug: string;
    };
};

const Page = ({ params }: PageProps) => {
    const slug: string = toThaiSlug(params.slug);
    const data: ICard | undefined = CARD.find((item: ICard) => item.title === slug);
    return (
        <Fragment>
            <Banner />
            <Navbar>
                <section className=" bg-[url('/header-bg.png')] bg-repeat">
                    <div className="py-8  text-left lg:py-16 lg:px-12">
                        <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-blue-800 md:text-xl lg:text-2xl">{data?.title}</h1>
                        <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left">{data?.description}</p>
                    </div>
                </section>
            </Navbar>
        </Fragment>
    )
}

export default Page;
