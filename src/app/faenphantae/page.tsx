"use client";

import { IQuestion } from "@/interfaces/question";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Fean() {
  const [question, setQuestion] = useState<IQuestion[]>();
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const bgColor = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"]

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
    setStep((prev) => prev + 1);

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
    <section className="flex flex-col pt-10 container w-[calc(40ch+16px)] mx-auto text-3xl">
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
              <span className="font-semibold">{question[step - 1].question}</span>
            </h2>
          </div>
          <br />
          <form>
            <section className="grid grid-cols-2 justify-items-center gap-4">
              {shuffle(question[step - 1].answer).map((ans, index) => (
                <section
                  key={ans}
                  className={`h-16 group cursor-pointer shadow-xl w-[20ch] text-center flex justify-center text-white ${bgColor[index]}`}
                  onClick={() => formHandler(ans)}
                >
                  <input
                    type="button"
                    value={ans}
                    className="group-hover:font-semibold cursor-pointer"
                  />
                </section>
              ))}
            </section>
          </form>
        </>
      ) : null}
    </section>
  );
}
