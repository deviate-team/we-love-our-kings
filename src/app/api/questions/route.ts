import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch("https://raw.githubusercontent.com/deviate-team/we-love-our-kings/dev/src/data/questions.json", {
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const questions = await res.json();

  const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 9);

  return NextResponse.json(randomQuestions);
}
