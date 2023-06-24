"use client"
import Banner from "@/components/Banner";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import { IKing } from "@/interfaces/king";
import { Fragment } from "react";

export default async function Home() {
  return (
    <Fragment>
      <Banner />
      <Navbar>
        <div className="container my-12 mx-auto px-4 md:px-12 mt-20">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <MainPage />
          </div>
        </div>
      </Navbar>
    </Fragment>
  )
}