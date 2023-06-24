"use client"

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import toThaiSlug from "@/hooks/encodeThaiString";
import { IKing } from "@/interfaces/king";
import { Fragment, useState } from "react";

interface PageProps {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: PageProps) => {
    const slug: string = toThaiSlug(params.slug);
    const [data, setData] = useState<IKing>({
        name: "",
        full_name: "",
    })
    
    return (
        <Fragment>
            <Banner />
            <Navbar>
                <section className=" bg-[url('/header-bg.png')] bg-repeat">
                    <div className="py-8  text-left lg:py-16 lg:px-12">
                        <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-blue-800 md:text-xl lg:text-2xl">{slug}</h1>
                        <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left"></p>
                    </div>
                </section>
            </Navbar>
        </Fragment>
    )
}

export default Page;