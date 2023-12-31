import Banner from "@/components/Banner";

export const metadata = {
  title: "แฟนพันธุ์แท้ รัก พ่อ",
  description: "แฟนพันธุ์แท้ รัก พ่อ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-[url('/background.jpeg')] min-h-screen w-full">
        <section>{children}</section>
      </main>
    </>
  );
}
