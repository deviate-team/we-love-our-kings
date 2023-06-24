"use client";

import { FormEvent, useEffect, useState } from "react";

export default function faen() {
  const [question, setQuestion] = useState({
    question: "พ่อชอบ ประเทศไหน",
    answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
    correctAnswer: "เยอรมัน",
  });
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  function getQuestion() {
    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setQuestion(data.question);
    //   });
  }

  function formHandler(answer: string) {
    let currentScore = 0;

    if (question.correctAnswer === answer) {
      setScore((prev) => prev + 1);
      currentScore = score;
    }

    if (step >= 10) {
      submitScore(currentScore, answer);
    } else {
      getNextQuestion();
    }
  }

  function submitScore(score: number, answer: string) {
    if (question.correctAnswer === answer) {
      score += 1;
    }

    alert(`คุณได้ ${score}/10 คะแนน`);
    setScore(0);
    setStep(1);
  }

  function getNextQuestion() {
    setStep((prev) => prev + 1);

    getQuestion();
  }

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  return (
    <section className="flex flex-col mt-10 container w-[30ch] mx-auto text-3xl">
      <h2>
        <span className="font-bold">{step}: </span>
        <span className="font-semibold">{question.question}</span>
      </h2>
      <br />
      <form>
        <section className="grid grid-cols-2 justify-items-center gap-16">
          {question.answer.map((ans) => (
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
    </section>
  );
}
