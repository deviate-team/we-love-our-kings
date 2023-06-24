"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IQuestion } from "@/interfaces/question";

export default function Fean() {
  const [question, setQuestion] = useState<IQuestion[]>();
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

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

    if (step >= 10) return setDone(true);

    if (!question) return;

    if (answer === question[step - 1].correctAnswer) {
      setScore((prev) => prev + 1);
    }
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
    <section className="flex flex-col mt-10 container w-[30ch] mx-auto text-3xl">
      {done ? (
        <>
          <h2 className="flex">
            <span className="font-bold">ชื่อของท่าน</span>
            <div className="grow" />
            <span>{score}/10 คะแนน</span>
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
          <h2>
            <span className="font-bold">{step}: </span>
            <span className="font-semibold">{question[step - 1].question}</span>
          </h2>
          <br />
          <form>
            <section className="grid grid-cols-2 justify-items-center gap-16">
              {shuffle(question[step - 1].answer).map((ans) => (
                <section key={ans}>
                  <input
                    type="button"
                    onClick={() => formHandler(ans)}
                    value={ans}
                    className="cursor-pointer hover:font-semibold"
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
