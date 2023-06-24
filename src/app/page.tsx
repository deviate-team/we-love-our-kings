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
      </Navbar>
    </Fragment>
  )
}