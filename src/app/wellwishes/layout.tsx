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
    <main className="bg-[url('/background.jpeg')] min-h-screen w-full">
      <section>{children}</section>
    </main>
  );
}
