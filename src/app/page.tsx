"use client"
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { CARD } from "@/constants/card";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
      <Banner />
      <Navbar>
        <div className="container my-12 mx-auto px-4 md:px-12 mt-20">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {CARD.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </Navbar>
    </Fragment>
  )
}
