"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const useCountdown = (targetDate: string): number[] => {
    const countDownDate: number = new Date(targetDate).getTime();
    const [countDown, setCountDown] = useState<number>(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  const getReturnValues = (countDown: number): number[] => {
    const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
      (countDown % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  let [days, hours, minutes, seconds]: number[] = useCountdown(
    "June 25, 2023 9:30:00"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/background.jpeg')]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-64 h-64 relative">
          <Image
            src="https://king.kapook.com/kingrama10/images/king.png"
            alt="banner"
            fill
          />
        </div>
        <h1 className="text-5xl text-white font-bold mb-8">
          &quot;รอทอดพระเนตรเร็วๆนี้&ldquo;
        </h1>
        <p>
          เหลืออีก 0{days} วัน {hours} ชั่วโมง {minutes} นาที {seconds} วินาที
        </p>
      </div>
    </main>
  );
}
