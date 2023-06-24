"use client";

import { FormEvent, useEffect, useState } from "react";

export default function faen() {
  const [question, setQuestion] = useState({
    question: "พ่อชอบ ประเทศไหน",
    answer: ["ไทย", "จีน", "อังกฤษ", "เยอรมัน"],
    correctAnswer: "เยอรมัน",
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  function getQuestion() {
    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setQuestion(data.question);
    //   });
  }

  function formHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let currentScore = 0;

    if (question.correctAnswer === selectedAnswer) {
      setScore((prev) => prev + 1);
      currentScore = score;
    }

    if (step >= 10) {
      submitScore(currentScore);
    } else {
      if (question.answer.indexOf(selectedAnswer) === -1)
        return alert("Please select an answer");

      getNextQuestion();
    }
  }

  function submitScore(score: number) {
    if (question.correctAnswer === selectedAnswer) {
      score += 1;
    }
  }

  function getNextQuestion() {
    setStep((prev) => prev + 1);
    setSelectedAnswer("");

    getQuestion();
  }

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  return (
    <section>
      <h2>
        {step}: {question.question}
      </h2>
      <form onSubmit={formHandler}>
        {question.answer.map((ans) => (
          <section key={ans}>
            <input
              type="radio"
              id={ans}
              name="faen"
              value={ans}
              checked={ans === selectedAnswer}
              onChange={() => {
                setSelectedAnswer(ans);
              }}
            />
            <label htmlFor={ans}>{ans}</label>
          </section>
        ))}
        <br />
        <p>Selected answer: {selectedAnswer}</p>
        <p>Score: {score}</p>
        <button type="submit">{step === 10 ? "ส่ง" : "ถัดไป"}</button>
      </form>
    </section>
  );
}
