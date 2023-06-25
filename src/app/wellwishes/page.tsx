export default async function WellWishes() {
  return (
    <>
      <form className="flex flex-col pt-10 container w-[30ch] mx-auto text-3xl">
        <label htmlFor="name" className="font-bold text-6xl text-center">
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
          className="cursor-pointer hover:text-yellow-900 transition duration-150 ease-in-out"
        />
      </form>
    </>
  );
}
