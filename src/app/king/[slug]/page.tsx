import DetailPage from "@/components/DetailPage";
import { Fragment } from "react";

interface PageProps {
  params: {
    slug: number;
  };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  const title = `KING RAMA ${slug} -  We love our king`;
  return (
    <Fragment>
      <title>{title}</title>
      <DetailPage id={slug} />
    </Fragment>
  );
}
