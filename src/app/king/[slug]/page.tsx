"use client"

import Banner from "@/components/Banner";
import DetailPage from "@/components/DetailPage";
import Navbar from "@/components/Navbar";
import { IKing } from "@/interfaces/king";
import { Fragment, useState } from "react";

interface PageProps {
    params: {
        slug: number;
    };
};

const Page = async ({ params }: PageProps) => {
    const slug = params.slug;
    return (
        <Fragment>
            <Banner />
            <Navbar>
                <DetailPage id={slug} />
            </Navbar>
        </Fragment>
    )
}

export default Page;