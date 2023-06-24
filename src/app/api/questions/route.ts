import { getDataFromJson } from "@/utils/file";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const questions = await getDataFromJson("questions");

  const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 9);

  return NextResponse.json(randomQuestions);
}
