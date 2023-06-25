export default async function WellWishes() {
  return (
    <>
      <form className="flex flex-col pt-10 container mx-auto text-3xl md:w-1/2 lg:w-[30ch]">
        <label htmlFor="name" className="font-bold text-4xl md:text-6xl text-center text-blue-800">
          ข้าพระพุทธเจ้า
        </label>
        <br />
        <input
          type="text"
          className="bg-yellow-100 !outline-none h-20 p-4 text-center"
        />
        <br />
        <input
          type="submit"
          value="ลงนามถวายพระพร"
          className="cursor-pointer hover:text-yellow-900 transition duration-150 ease-in-out text-blue-800"
        />
      </form>
    </>
  );
}
