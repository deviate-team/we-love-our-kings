import DetailPage from "@/components/DetailPage";
import { Fragment } from "react";

interface PageProps {
  params: {
    slug: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug;
  return (
    <Fragment>
      <DetailPage id={slug} />
    </Fragment>
  );
};

export default Page;
