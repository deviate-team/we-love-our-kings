import Banner from "@/components/Banner";

export const metadata = {
  title: "ลงนามถวายพระพร",
  description: "ลงนามถวายพระพร",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[url('/background.jpeg')] bg-repeat h-screen w-screen">
      <Banner />
      <section>{children}</section>
    </main>
  );
}
