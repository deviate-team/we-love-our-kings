import DetailPage from "@/components/DetailPage";
import { Fragment } from "react";

interface PageProps {
  params: {
    slug: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug;
  const title = `KING RAMA ${slug} -  We love our king`;
  return (
    <Fragment>
      <title>{title}</title>
      <DetailPage id={slug} />
    </Fragment>
  );
};

export default Page;
