"use client"
import useCountdown from "@/hooks/useCountdown";
import Image from "next/image";

export default function Home() {
  let [days, hours, minutes, seconds]: number[] = useCountdown("June 25, 2023 9:30:00");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/background.jpeg')]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-64 h-64 relative">
          <Image src='https://king.kapook.com/kingrama10/images/king.png' alt="banner" fill />
        </div>
        <h1 className="text-5xl text-white font-bold mb-8">
          รอทอดพระเนตรเร็วๆนี้
        </h1>
        <p>เหลืออีก 0{days} วัน {hours} ชั่วโมง {minutes} นาที {seconds} วินาที</p>
      </div>
    </main>
  )
}
