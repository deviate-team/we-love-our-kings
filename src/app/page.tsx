import MainPage from "@/components/MainPage";
import { Fragment } from "react";

export default async function Home() {
  return (
    <Fragment>
      <div className="container mx-auto px-4 md:px-12 bg-gray-200">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <MainPage />
        </div>
      </div>
    </Fragment>
  );
}
