import Banner from "@/components/Banner";

export const metadata = {
  title: "แฟนพันธุ์แท้ รัก พ่อ",
  description: "แฟนพันธุ์แท้ รัก พ่อ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-[url('/background.jpeg')] bg-repeat h-screen w-screen">
        <Banner />
        <section>{children}</section>
      </main>
    </>
  );
}
