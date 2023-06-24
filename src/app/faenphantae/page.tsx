"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Fean() {
  const [question, setQuestion] = useState([
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
    {
      question: "พ่อชอบ ประเทศไหน",
      answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
      correctAnswer: "เยอรมัน",
    },
  ]);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  function getQuestion() {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setQuestion(data.question);
      });
  }

  function formHandler(answer: string) {
    let currentScore = 0;

    if (question[step - 1].correctAnswer === answer) {
      stepHandler();
      currentScore = score;
    }

    if (step >= 10) {
      submitScore(currentScore, answer);
    } else if (step === 9) {
      getLastQuestion();
    } else {
      getNextQuestion();
    }
  }

  function submitScore(score: number, answer: string) {
    if (answer === "ไม่รัก") {
      setScore(0);
    }

    setDone(true);
  }

  function stepHandler() {
    setStep((prev) => prev + 1);
  }

  function getLastQuestion() {
    stepHandler();
    setQuestion((prev) => [
      ...prev,
      {
        question: "คุณรักพ่อไหม",
        answer: ["รัก", "ไม่รัก"],
        correctAnswer: "รัก",
      },
    ]);
  }

  function getNextQuestion() {
    stepHandler();
  }

  useEffect(() => {
    getQuestion();
  }, []);

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
      ) : (
        <>
          <h2>
            <span className="font-bold">{step}: </span>
            <span className="font-semibold">{question[step - 1].question}</span>
          </h2>
          <br />
          <form>
            <section className="grid grid-cols-2 justify-items-center gap-16">
              {question[step - 1].answer.map((ans) => (
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
      )}
    </section>
  );
}
