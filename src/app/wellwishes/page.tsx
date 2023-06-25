"use client";

import { useState } from "react";

export default function WellWishes() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form
        className="flex flex-col pt-10 container mx-auto text-3xl md:w-1/2 lg:w-[30ch]"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="font-bold text-4xl md:text-6xl text-center text-blue-800"
        >
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
        <br />
        <audio controls autoPlay className="mx-auto">
          <source src="bgmusic.mp3" type="audio/mpeg" />
        </audio>
      </form>

      {submitted && (
        <div>
          <p className="text-3xl text-center mt-8 text-blue-800 font-extrabold">
            ลงนามไปเถอะ สุดท้ายเขาก็ไม่ได้อ่านอยู่ดี
          </p>
          <div className="flex justify-center mt-10">
            <iframe
              className="items-center w-96 h-60"
              src="https://www.youtube.com/embed/VutbmKvkERM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
