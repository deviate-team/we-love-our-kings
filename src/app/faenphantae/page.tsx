"use client";

import { IQuestion } from "@/interfaces/question";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Fean() {
  const [question, setQuestion] = useState<IQuestion[]>();
  const [score, setScore] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [done, setDone] = useState<boolean>(false);

  const bgColor: string[] = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  async function getQuestion() {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestion([
          ...data,
          {
            question: "คุณรักพ่อไหม",
            answer: ["รัก", "ไม่รัก"],
            correctAnswer: "รัก",
          },
        ]);
      });
  }

  useEffect(() => {
    getQuestion();
  }, []);

  function formHandler(answer: string) {
    setStep((prev: number) => prev + 1);

    if (answer === "รัก") {
      setScore(100);
    } else {
      setScore(Math.floor(Math.random() * 49));
    }

    if (step >= 10) return setDone(true);
  }

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <section className="flex flex-col pt-10 container max-w-[calc(40ch+16px)] w-full mx-auto text-3xl">
      {done ? (
        <>
          <h2 className="flex">
            <span className="font-bold">ชื่อของท่าน</span>
            <div className="grow" />
            <span>{score}%</span>
          </h2>
          <br />
          <input
            type="text"
            className="bg-yellow-100 !outline-none h-20 p-4 text-center"
          />
          <br />
          <Link
            href="/faenphantae/scoreboard"
            className="hover:font-semibold mx-auto"
          >
            ดูคะแนน
          </Link>
        </>
      ) : question ? (
        <>
          <div className="p-10 bg-white shadow-xl">
            <h2>
              <span className="font-bold">{step}: </span>
              <span className="font-semibold">
                {question[step - 1].question}
              </span>
            </h2>
          </div>
          <br />
          <form>
            <section className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
              {shuffle(question[step - 1].answer).map((ans, index) => (
                <section
                  key={ans}
                  className={`h-32 group cursor-pointer shadow-xl max-w-[20ch] w-full text-center flex justify-center text-white transition duration-150 ease-in-out ${bgColor[index]}`}
                  onClick={() => formHandler(ans)}
                >
                  <input
                    type="button"
                    value={ans}
                    className="group-hover:font-semibold cursor-pointer max-w-[15ch] w-full whitespace-break-spaces"
                  />
                </section>
              ))}
            </section>
          </form>
          <audio controls autoPlay className="absolute bottom-0 right-0">
            <source src="kahoot.mp3" type="audio/mpeg" />
          </audio>
        </>
      ) : null}
    </section>
  );
}
